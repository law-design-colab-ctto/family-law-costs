import { propEq, isEmpty } from "ramda";

export const personaHasStage = stage => propEq("stage", stage);
export const noStageFilter = isEmpty;
