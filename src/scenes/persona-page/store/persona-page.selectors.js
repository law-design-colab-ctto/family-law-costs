import { createStructuredSelector, createSelector } from "reselect";
import { path, pipe } from "ramda";
import { selectPersonas } from "src/scenes/personas/store/personas.selectors";
import {
  createPersonasObject,
  numberToMoneyDisplay,
  pathnameToPersona
} from "./persona-page.utils";
import { LEGAL_AID_CUTOFF } from "src/data/by-province";
import { NUMBER_OF_COURT_EVENTS, TRANSPORT_FEES } from "src/data/by-province";

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

const selectPersonaIncomeDisplay = createSelector(
  selectPersonaIncome,
  numberToMoneyDisplay
);

const selectIsEligibleForLegalAid = createSelector(
  selectPersonaIncome,
  selectProvince,
  (income, province) => income <= LEGAL_AID_CUTOFF[province]
);

const selectReasonsForLegalAidEligibility = createSelector(
  selectPersonaIncome,
  selectProvince,
  (income, province) => {
    const incomeDesc =
      income <= LEGAL_AID_CUTOFF[province]
        ? "Their income is within the legal cut-off in their province."
        : "Their income is above the legal cut-off in their province.";
    // TODO: add the coverage reason here
    return [incomeDesc];
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

const selectMovingFees = createSelector(selectCurrentPersona, () =>
  numberToMoneyDisplay(7000)
);

const selectChildcareFees = createSelector(selectCurrentPersona, () =>
  numberToMoneyDisplay(8000)
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
  totalDirectFees: selectTotalDirectFees
});
