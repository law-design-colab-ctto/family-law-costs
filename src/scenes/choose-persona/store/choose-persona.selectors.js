import { createStructuredSelector, createSelector } from "reselect";
import { path, filter, allPass } from "ramda";
import {
  personaHasStageIfSet,
  personaHasJobStabilityIfSet
} from "./choose-persona.utils";
import { selectPersonas } from "src/scenes/personas/store/personas.selectors";
import { FILTER_TYPES } from "./choose-persona.constants";

const selectChoosePersona = path(["choosePersona"]);

const selectStageFilter = createSelector(
  selectChoosePersona,
  path([FILTER_TYPES.STAGE])
);

const selectJobStabilityFilter = createSelector(
  selectChoosePersona,
  path([FILTER_TYPES.JOB_STABILITY])
);

const selectFilteredPersonas = createSelector(
  selectPersonas,
  selectStageFilter,
  selectJobStabilityFilter,
  (personas, stage, jobStability) =>
    filter(
      allPass([
        personaHasStageIfSet(stage),
        personaHasJobStabilityIfSet(jobStability)
      ])
    )(personas)
);

export const choosePersonaConnector = createStructuredSelector({
  stageFilter: selectStageFilter,
  jobStabilityFilter: selectJobStabilityFilter,
  personasToDisplay: selectFilteredPersonas
});
