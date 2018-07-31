import { CHOOSE_PERSONA_ACTION_TYPES } from "./choose-persona.constants";

export const setPersonaStageFilter = ({ stage }) => ({
  type: CHOOSE_PERSONA_ACTION_TYPES.SET_PERSONA_STAGE_FILTER,
  payload: { stage }
});
