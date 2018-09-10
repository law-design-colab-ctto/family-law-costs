import { createStructuredSelector, createSelector } from "reselect";
import { path, filter, allPass } from "ramda";
import {
  personaHasStageIfSet,
  personaHasStressCapacityIfSet,
  personaHasJobStabilityIfSet,
  personaHasDependentsIfSet
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

const selectStressCapacityFilter = createSelector(
  selectChoosePersona,
  path([FILTER_TYPES.STRESS_CAPACITY])
);

const selectDependentsFilter = createSelector(
  selectChoosePersona,
  path([FILTER_TYPES.DEPENDENTS])
);

const selectFilteredPersonas = createSelector(
  selectPersonas,
  selectStageFilter,
  selectJobStabilityFilter,
  selectStressCapacityFilter,
  selectDependentsFilter,
  (personas, stage, jobStability, stressCapacity, dependents) =>
    filter(
      allPass([
        personaHasStageIfSet(stage),
        personaHasJobStabilityIfSet(jobStability),
        personaHasStressCapacityIfSet(stressCapacity),
        personaHasDependentsIfSet(dependents)
      ])
    )(personas)
);

export const choosePersonaConnector = createStructuredSelector({
  stageFilter: selectStageFilter,
  jobStabilityFilter: selectJobStabilityFilter,
  stressCapacityFilter: selectStressCapacityFilter,
  personasToDisplay: selectFilteredPersonas,
  dependentsFilter: selectDependentsFilter
});
