import { createStructuredSelector, createSelector } from "reselect";
import { path, map, pipe } from "ramda";
import { selectPersonas } from "src/scenes/personas/store/personas.selectors";
import {
  createPersonasObject,
  numberToMoneyDisplay
} from "./persona-page.utils";
import { LEGAL_AID_CUTOFF } from "src/data/by-province";
import { NUMBER_OF_COURT_EVENTS, TRANSPORT_FEES } from "src/data/by-province";

const selectPersonaPage = path(["personaPage"]);

const selectPersonaIncome = createSelector(selectPersonaPage, path(["income"]));
const selectHasLawyer = createSelector(selectPersonaPage, path(["hasLawyer"]));
const selectProvince = createSelector(selectPersonaPage, path(["province"]));
const selectLocationType = createSelector(
  selectPersonaPage,
  path(["locationType"])
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

const addTransportationFees = locationType => personas =>
  map(persona => {
    const numberOfCourtEvents = NUMBER_OF_COURT_EVENTS[persona.stage];
    const fees = TRANSPORT_FEES[locationType] * numberOfCourtEvents;
    return {
      ...persona,
      transportationFees: isNaN(fees) ? "" : numberToMoneyDisplay(fees)
    };
  }, personas);

const addLegalFees = () => personas =>
  map(
    persona => ({ ...persona, legalFees: numberToMoneyDisplay(45861) }),
    personas
  );

const addMovingFees = () => personas =>
  map(
    persona => ({ ...persona, movingFees: numberToMoneyDisplay(500) }),
    personas
  );

const addChildcareFees = () => personas =>
  map(
    persona => ({ ...persona, childcareFees: numberToMoneyDisplay(6000) }),
    personas
  );

const addTotalDirectFees = () => personas =>
  map(
    persona => ({ ...persona, totalDirectFees: numberToMoneyDisplay(100000) }),
    personas
  );

const selectPersonasByName = createSelector(
  selectPersonas,
  selectLocationType,
  (personas, locationType) =>
    pipe(
      addTransportationFees(locationType),
      addLegalFees("provide stuff needed for calc"),
      addMovingFees("provide stuff needed for calc"),
      addChildcareFees("provide stuff needed for calc"),
      addTotalDirectFees("provide stuff needed for calc"),
      createPersonasObject
    )(personas)
);

export const personasConnector = createStructuredSelector({
  personasByName: selectPersonasByName,
  incomeDisplay: selectPersonaIncomeDisplay,
  income: selectPersonaIncome,
  hasLawyer: selectHasLawyer,
  isEligibleForLegalAid: selectIsEligibleForLegalAid,
  eligibilityReasons: selectReasonsForLegalAidEligibility,
  locationType: selectLocationType
});
