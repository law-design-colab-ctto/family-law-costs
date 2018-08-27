import { createStructuredSelector, createSelector } from "reselect";
import { path } from "ramda";
import { selectPersonas } from "src/scenes/personas/store/personas.selectors";
import { createPersonasObject } from "./persona-page.utils";
import { LEGAL_AID_CUTOFF } from "src/data/by-province";

const selectPersonaPage = path(["personaPage"]);

const selectPersonaIncome = createSelector(selectPersonaPage, path(["income"]));
const selectHasLawyer = createSelector(selectPersonaPage, path(["hasLawyer"]));
const selectProvince = createSelector(selectPersonaPage, path(["province"]));

const selectPersonaIncomeDisplay = createSelector(
  selectPersonaIncome,
  income => `$${income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
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

const selectPersonasByName = createSelector(
  selectPersonas,
  createPersonasObject
);

export const personasConnector = createStructuredSelector({
  personasByName: selectPersonasByName,
  incomeDisplay: selectPersonaIncomeDisplay,
  income: selectPersonaIncome,
  hasLawyer: selectHasLawyer,
  isEligibleForLegalAid: selectIsEligibleForLegalAid,
  eligibilityReasons: selectReasonsForLegalAidEligibility
});
