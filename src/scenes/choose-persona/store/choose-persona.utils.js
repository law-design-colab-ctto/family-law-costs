import { propEq, isEmpty } from "ramda";
import { FILTER_TYPES } from "./choose-persona.constants";

export const personaHasStageIfSet = stage => persona =>
  propEq(FILTER_TYPES.STAGE, stage)(persona) || isEmpty(stage);

export const personaHasJobStabilityIfSet = jobStability => persona =>
  propEq(FILTER_TYPES.JOB_STABILITY, jobStability)(persona) ||
  isEmpty(jobStability);

export const noFilterSelected = isEmpty;
