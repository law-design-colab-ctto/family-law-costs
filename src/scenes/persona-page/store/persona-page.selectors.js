import { createStructuredSelector, createSelector } from "reselect";
import { path, pipe } from "ramda";
import { selectPersonas } from "src/scenes/personas/store/personas.selectors";
import {
  createPersonasObject,
  numberToMoneyDisplay,
  pathnameToPersona
} from "./persona-page.utils";
import { LEGAL_AID_CUTOFF, LEGAL_AID_ELIGIBILITY } from "src/data/by-province";
import { NUMBER_OF_COURT_EVENTS, TRANSPORT_FEES } from "src/data/by-province";
import { COST_OF_CHILDCARE_PER_DAY, MOVING_FEES } from "src/data/by-province";
import {
  LEGAL_FEES,
  COURT_FEES_BY_STAGE,
  PROFESSIONAL_FEES
} from "src/data/by-province";
import { capitalize } from "../../../utils";
import { INCOME_BAND, INSTABILITY_SCORE } from "../../../data/by-province";

const selectCurrentPersonaName = pipe(
  path(["router", "location", "pathname"]),
  pathnameToPersona
);

const selectPersonasByName = createSelector(
  selectPersonas,
  createPersonasObject
);

const selectCurrentPersona = createSelector(
  selectCurrentPersonaName,
  selectPersonasByName,
  (name, personas) => personas[name]
);

const selectPersonaPage = path(["personaPage"]);

const selectPersonaIncome = createSelector(selectPersonaPage, path(["income"]));
const selectHasLawyer = createSelector(selectPersonaPage, path(["hasLawyer"]));
const selectProvince = createSelector(selectPersonaPage, path(["province"]));
const selectLocationType = createSelector(
  selectPersonaPage,
  personaPageData => path(["locationType"])(personaPageData) || "urban"
);
const selectModalIsOpen = createSelector(
  selectPersonaPage,
  path(["modalIsOpen"])
);

const selectPersonaIncomeDisplay = createSelector(
  selectPersonaIncome,
  numberToMoneyDisplay
);

const selectIsEligibleForLegalAid = createSelector(
  selectPersonaIncome,
  selectProvince,
  selectCurrentPersona,
  (income, province, persona) => {
    let childindex = persona.children > 2 ? 2 : persona.children;
    return (
      income <= LEGAL_AID_CUTOFF[province][childindex] &&
      LEGAL_AID_ELIGIBILITY[persona.stage]
    );
  }
);

const selectReasonsForLegalAidEligibility = createSelector(
  selectPersonaIncome,
  selectProvince,
  selectCurrentPersona,
  (income, province, persona) => {
    let reasons = [];
    let childindex = persona.children > 2 ? 2 : persona.children;
    if (income > LEGAL_AID_CUTOFF[province][childindex]) {
      reasons.push(
        `${capitalize(persona.pronouns.possessive)}
        income is above the legal aid cut-off in
        ${persona.pronouns.possessive} province.`
      );
    }
    if (!LEGAL_AID_ELIGIBILITY[persona.stage]) {
      reasons.push(
        `Legal aid in
        ${persona.pronouns.possessive}
        province does not cover this type of proceeding.`
      );
    }
    return reasons;
  }
);

const selectTransportationFees = createSelector(
  selectCurrentPersona,
  selectLocationType,
  (persona, locationType) => {
    const numberOfCourtEvents = NUMBER_OF_COURT_EVENTS[persona.stage];
    const fees = TRANSPORT_FEES[locationType] * numberOfCourtEvents;
    return fees;
  }
);

const selectTransportationFeesDisplay = createSelector(
  selectTransportationFees,
  fees => (isNaN(fees) ? "" : numberToMoneyDisplay(fees))
);

const selectLegalFees = createSelector(
  selectCurrentPersona,
  selectHasLawyer,
  selectIsEligibleForLegalAid,
  selectProvince,
  (persona, withLawyer, isEligibleForLegalAid, province) => {
    const lawyerFees = withLawyer
      ? LEGAL_FEES[persona.stage] * persona.conflictMultiplier
      : 0;
    const legalAid = isEligibleForLegalAid ? lawyerFees : 0;
    const professionalCourtFees =
      COURT_FEES_BY_STAGE[province][persona.stage] +
      PROFESSIONAL_FEES[persona.stage];
    const legalFees = lawyerFees - legalAid + professionalCourtFees;
    return parseInt(legalFees, 10);
  }
);

const selectLegalFeesDisplay = createSelector(
  selectLegalFees,
  numberToMoneyDisplay
);

const selectCostsOfTheCase = createSelector(
  selectLegalFees,
  selectTransportationFees,
  (legalFees, transportationFees) => legalFees + transportationFees
);

const selectCostsOfTheCaseDisplay = createSelector(
  selectCostsOfTheCase,
  fees => (isNaN(fees) ? "" : numberToMoneyDisplay(fees))
);
// Other Financial Impact Selectors

const selectDailyIncome = createSelector(selectPersonaIncome, income => {
  return income / 252;
});

// should be displayed
const selectDaysToPrepAndAttend = createSelector(
  selectDailyIncome,
  selectCurrentPersona,
  selectHasLawyer,
  (dailyIncome, persona, lawyer) => {
    let days =
      NUMBER_OF_COURT_EVENTS[persona.stage] * persona.daysToPrepAndAttend;
    if (
      INCOME_BAND.maxband4 < dailyIncome &&
      dailyIncome < INCOME_BAND.maxband5 &&
      lawyer
    ) {
      days *= 2 / 3;
    } else if (INCOME_BAND.maxband5 < dailyIncome && lawyer) {
      days *= 1 / 3;
    }
    return Math.round(days);
  }
);

const selectDaysMissedForHealth = createSelector(
  selectCurrentPersona,
  persona => {
    return Math.round(
      NUMBER_OF_COURT_EVENTS[persona.stage] * persona.daysFeelingUnwell
    );
  }
);

const selectTotalDaysMissed = createSelector(
  selectDaysMissedForHealth,
  selectDaysToPrepAndAttend,
  (health, prepAndAttend) => Math.round(health + prepAndAttend)
);

const selectMovingFees = createSelector(
  selectCurrentPersona,
  selectProvince,
  (persona, province) => {
    if (persona.hasToMove) {
      return MOVING_FEES[province];
    } else {
      return 0;
    }
  }
);

const selectMovingFeesDisplay = createSelector(selectMovingFees, moving => {
  if (moving === 0 || isNaN(moving)) {
    return "";
  } else {
    return numberToMoneyDisplay(moving);
  }
});

const selectDaysOffWork = createSelector(
  selectDaysMissedForHealth,
  selectDaysToPrepAndAttend,
  selectTotalDaysMissed,
  (health, prepAndAttend, total) => {
    return {
      courtDays: prepAndAttend,
      sickDays: health,
      totalDays: total
    };
  }
);

const selectChildcareFees = createSelector(
  selectCurrentPersona,
  selectTotalDaysMissed,
  selectProvince,
  (persona, totalDays, province) =>
    persona.children * COST_OF_CHILDCARE_PER_DAY[province] * totalDays
);

const selectChildcareFeesDisplay = createSelector(
  selectChildcareFees,
  childcare => {
    if (childcare === 0 || isNaN(childcare)) {
      return "";
    } else {
      return numberToMoneyDisplay(childcare);
    }
  }
);

const selectTotalLostIncome = createSelector(
  selectDailyIncome,
  selectTotalDaysMissed,
  (dailyIncome, totalDays) => Math.round(dailyIncome * totalDays)
);

const selectTotalLostIncomeDisplay = createSelector(
  selectTotalLostIncome,
  income => {
    if (income === 0 || isNaN(income)) {
      return "";
    } else {
      return numberToMoneyDisplay(income);
    }
  }
);

const selectOtherFinancialImpactsDisplay = createSelector(
  selectTotalLostIncome,
  selectChildcareFees,
  selectMovingFees,
  (lostIncome, childcare, moving) =>
    numberToMoneyDisplay(lostIncome + childcare + moving)
);

// instability factor selectors

const selectInstability = createSelector(
  selectCurrentPersona,
  selectPersonaIncome,
  (persona, income) => {
    let a = income > 100000 ? 1 : persona.paymentmethodFactor;
    let b = income > 75000 ? 1 : persona.jobflexibilityFactor;
    let c = persona.stablejobFactor;
    let d = income > 75000 ? 1 : persona.healthcostFactor;
    let e = persona.healthimpactFactor;
    let f = persona.hasToMove === true ? 5 : 1;
    let instabilityscore = a + b + c + d + e + f;
    if (instabilityscore <= INSTABILITY_SCORE.maxscorelow) {
      return "low";
    } else if (
      INSTABILITY_SCORE.maxscorelow < instabilityscore &&
      instabilityscore <= INSTABILITY_SCORE.maxscoremed
    ) {
      return "medium";
    } else {
      return "high";
    }
  }
);

const whatifMediation = createSelector(
  selectCurrentPersona,
  selectProvince,
  selectLocationType,
  selectPersonaIncome,
  function(persona, province, locationType, income) {
    const average_legal_fee_mediation = 4423;
    const actual_legal_fee =
      persona.conflictMultiplier * average_legal_fee_mediation;
    const court_fee = COURT_FEES_BY_STAGE[province]["application"]; // fee is set to "application" value
    const professional_fee = PROFESSIONAL_FEES[persona.stage];
    const total_legal_costs = actual_legal_fee + court_fee + professional_fee;

    const avg_num_court_events = 2; // fixed for Mediation
    const total_travel_cost =
      avg_num_court_events * TRANSPORT_FEES[locationType];

    const preparation_days = 2; // fixed for Mediation
    const sick_days = 2; // fixed for mediation

    const days_to_prep = preparation_days * avg_num_court_events;
    const days_missed_for_health = sick_days * avg_num_court_events;

    const total_days_missed = days_to_prep + days_missed_for_health;
    const daily_income = income / 252;

    const total_lost_income = total_days_missed * daily_income;

    const child_care_total_days_off =
      COST_OF_CHILDCARE_PER_DAY[province] *
      persona.children *
      total_days_missed;

    const moving_cost = persona.hasToMove ? MOVING_FEES[province] : 0;

    return (
      total_legal_costs +
      total_travel_cost +
      total_lost_income +
      child_care_total_days_off +
      moving_cost
    );
  }
);

const whatifCourtResolution = createSelector(
  selectCostsOfTheCase,
  selectTotalLostIncome,
  selectChildcareFees,
  selectMovingFees,
  (costs, lostincome, childcare, moving) =>
    costs + lostincome + childcare + moving
);

const whatifIncreasedConflict = createSelector(
  whatifCourtResolution,
  whatifCourtResolution => whatifCourtResolution * 2
);

const whatifHighConflict = createSelector(
  whatifCourtResolution,
  whatifCourtResolution => whatifCourtResolution * 6
);

export const personasConnector = createStructuredSelector({
  personasByName: selectPersonasByName,
  incomeDisplay: selectPersonaIncomeDisplay,
  income: selectPersonaIncome,
  hasLawyer: selectHasLawyer,
  isEligibleForLegalAid: selectIsEligibleForLegalAid,
  eligibilityReasons: selectReasonsForLegalAidEligibility,
  locationType: selectLocationType,
  transportationFees: selectTransportationFees,
  transportationFeesDisplay: selectTransportationFeesDisplay,
  legalFees: selectLegalFees,
  legalFeesDisplay: selectLegalFeesDisplay,
  movingFeesDisplay: selectMovingFeesDisplay,
  movingFees: selectMovingFees,
  childcareFeesDisplay: selectChildcareFeesDisplay,
  childcareFees: selectChildcareFees,
  modalIsOpen: selectModalIsOpen,
  daysOffWork: selectDaysOffWork,
  province: selectProvince,
  costsOfTheCase: selectCostsOfTheCaseDisplay,
  mediation: whatifMediation,
  courtResolution: whatifCourtResolution,
  increasedConflict: whatifIncreasedConflict,
  highConflict: whatifHighConflict,
  otherFinancialImpacts: selectOtherFinancialImpactsDisplay,
  totalLostIncomeDisplay: selectTotalLostIncomeDisplay,
  totalLostIncome: selectTotalLostIncome,
  impactOnStability: selectInstability
});
