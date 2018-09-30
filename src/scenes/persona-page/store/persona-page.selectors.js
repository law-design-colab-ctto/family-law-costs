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
import { INCOME_BAND } from "../../../data/by-province";

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
    return (
      income <= LEGAL_AID_CUTOFF[province][persona.children] &&
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
    if (income > LEGAL_AID_CUTOFF[province][persona.children]) {
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
    if (INCOME_BAND.maxband4 < dailyIncome < INCOME_BAND.maxband5 && lawyer) {
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
  selectLegalFees,
  selectTransportationFees,
  selectCurrentPersona,
  selectPersonaIncome,
  selectProvince,
  (selectLegalFees, selectTransportationFees, persona, income, province) => {
    const costs_of_the_case = selectLegalFees + selectTransportationFees;

    const avg_num_court_events = 1;

    const preparation_days = persona.daysToPrepAndAttend;
    const sick_days = persona.daysFeelingUnwell;
    const daily_income = income / 252;

    /* If daily income in band 5 and hire a lawyer, then reduce by 1/3
        If daily income in band 6 and hire a lawyer, then reduce by 2/3 */
    const days_to_prep = preparation_days * avg_num_court_events;

    const days_missed_for_health = sick_days * avg_num_court_events;
    const total_days_missed = days_to_prep + days_missed_for_health;
    const total_lost_income = total_days_missed * daily_income;

    const child_care_total_days_off =
      COST_OF_CHILDCARE_PER_DAY[province] *
      persona.children *
      total_days_missed;
    const moving_cost = persona.hasToMove ? MOVING_FEES[province] : 0;
    const other_financial_impacts =
      total_lost_income + child_care_total_days_off + moving_cost;

    return costs_of_the_case + other_financial_impacts;
  }
);

const whatifIncreasedConflict = createSelector(
  whatifCourtResolution,
  whatifCourtResolution => whatifCourtResolution * 2
);

const whatifHighConflict = createSelector(
  whatifCourtResolution,
  whatifCourtResolution => whatifCourtResolution * 6
);

// displayed
const selectTotalLostIncome = createSelector(
  selectDailyIncome,
  selectTotalDaysMissed,
  (dailyIncome, totalDays) => Math.round(dailyIncome + totalDays)
);

const selectOtherFinancialImpacts = createSelector(
  selectTotalLostIncome,
  selectChildcareFees,
  selectMovingFees,
  (lostIncome, childcare, moving) => {
    console.log(lostIncome);
    console.log(childcare);
    console.log(moving);
    let total = numberToMoneyDisplay(lostIncome + childcare + moving);
    console.log(total);
    return total;
  }
);


export const personasConnector = createStructuredSelector({
  personasByName: selectPersonasByName,
  incomeDisplay: selectPersonaIncomeDisplay,
  income: selectPersonaIncome,
  hasLawyer: selectHasLawyer,
  isEligibleForLegalAid: selectIsEligibleForLegalAid,
  eligibilityReasons: selectReasonsForLegalAidEligibility,
  locationType: selectLocationType,
  transportationFees: selectTransportationFeesDisplay,
  legalFees: selectLegalFeesDisplay,
  movingFees: selectMovingFees,
  childcareFees: selectChildcareFees,
  modalIsOpen: selectModalIsOpen,
  daysOffWork: selectDaysOffWork,
  province: selectProvince,
  costsOfTheCase: selectCostsOfTheCaseDisplay,
  mediation: whatifMediation,
  courtResolution: whatifCourtResolution,
  increasedConflict: whatifIncreasedConflict,
  highConflict: whatifHighConflict,
  otherFinancialImpacts: selectOtherFinancialImpacts
});
