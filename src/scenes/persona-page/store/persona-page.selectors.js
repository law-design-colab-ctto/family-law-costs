import { createStructuredSelector, createSelector } from "reselect";
import { path } from "ramda";
import { selectPersonas } from "src/scenes/personas/store/personas.selectors";
import { createPersonasObject } from "./persona-page.utils";

const selectPersonaPage = path(["personaPage"]);

const selectPersonaIncome = createSelector(selectPersonaPage, path(["income"]));
const selectPersonaIncomeDisplay = createSelector(
  selectPersonaIncome,
  income => `$${income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
);

const selectPersonasByName = createSelector(
  selectPersonas,
  createPersonasObject
);

export const personasConnector = createStructuredSelector({
  personasByName: selectPersonasByName,
  incomeDisplay: selectPersonaIncomeDisplay,
  income: selectPersonaIncome
});
