import { createStructuredSelector, createSelector } from "reselect";
import { path, filter } from "ramda";
import { personaHasStage, noStageFilter } from "./choose-persona.utils";

const selectChoosePersona = path(["choosePersona"]);
const selectPersonaStageFilter = createSelector(
  selectChoosePersona,
  path(["stageFilter"])
);
const selectPersonas = createSelector(selectChoosePersona, path(["personas"]));
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
