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
import { capitalize } from "../../../utils";

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
  selectCurrentPersona,
  (personaPageData, currentPersona) =>
    path(["locationType"])(personaPageData) || currentPersona.locationType
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
        income is above the legal cut-off in
        ${persona.pronouns.possessive} province.`
      );
    }
    if (!LEGAL_AID_ELIGIBILITY[persona.stage]) {
      reasons.push(
        `Legal aid in
        ${persona.pronouns.possessive}
        province do not cover this type of proceeding`
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
    return isNaN(fees) ? "" : numberToMoneyDisplay(fees);
  }
);

const selectLegalFees = createSelector(selectCurrentPersona, () =>
  numberToMoneyDisplay(11000)
);

const selectMovingFees = createSelector(selectCurrentPersona,
  selectProvince,
  (persona, province) =>
    numberToMoneyDisplay(MOVING_FEES[province])
);

const selectChildcareFees = createSelector(selectCurrentPersona,
  selectProvince,
  (persona, province) =>
    numberToMoneyDisplay(
      10 * COST_OF_CHILDCARE_PER_DAY[province] * persona.children)
);

const selectTotalDirectFees = createSelector(selectCurrentPersona, () =>
  numberToMoneyDisplay(90000)
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
  legalFees: selectLegalFees,
  movingFees: selectMovingFees,
  childcareFees: selectChildcareFees,
  totalDirectFees: selectTotalDirectFees,
  modalIsOpen: selectModalIsOpen
});
