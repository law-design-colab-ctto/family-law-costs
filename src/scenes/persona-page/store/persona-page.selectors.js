import { createStructuredSelector, createSelector } from "reselect";
import { selectPersonas } from "src/scenes/personas/store/personas.selectors";
import { createPersonasObject } from "./persona-page.utils";

const selectPersonasByName = createSelector(
  selectPersonas,
  createPersonasObject
);

export const personasConnector = createStructuredSelector({
  personasByName: selectPersonasByName
});
