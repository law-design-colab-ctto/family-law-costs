import { createStructuredSelector, createSelector } from "reselect";
import { path, filter } from "ramda";
import { personaHasStage, noStageFilter } from "./choose-persona.utils";
import { selectPersonas } from "src/scenes/personas/store/personas.selectors";

const selectChoosePersona = path(["choosePersona"]);
const selectPersonaStageFilter = createSelector(
  selectChoosePersona,
  path(["stageFilter"])
);
const selectFilteredPersonas = createSelector(
  selectPersonas,
  selectPersonaStageFilter,
  (personas, stage) =>
    noStageFilter(stage) ? personas : filter(personaHasStage(stage), personas)
);

export const choosePersonaConnector = createStructuredSelector({
  stageFilter: selectPersonaStageFilter,
  personasToDisplay: selectFilteredPersonas
});
