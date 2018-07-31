import { createStructuredSelector, createSelector } from "reselect";
import { path } from "ramda";

const selectPersonaFilters = path(["choosePersona"]);
const selectPersonaStageFilter = createSelector(
  selectPersonaFilters,
  path(["stageFilter"])
);
export const choosePersonaConnector = createStructuredSelector({
  stageFilter: selectPersonaStageFilter
});
