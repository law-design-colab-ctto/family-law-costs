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
  (personas, stage) => {
    console.log(personas);
    console.log(
      noStageFilter(stage) ? personas : filter(personaHasStage(stage), personas)
    );
    // if stage filter is empty string, return all personas
    return noStageFilter(stage)
      ? personas
      : filter(personaHasStage(stage), personas);
  }
);

export const choosePersonaConnector = createStructuredSelector({
  stageFilter: selectPersonaStageFilter,
  personasToDisplay: selectFilteredPersonas
});
