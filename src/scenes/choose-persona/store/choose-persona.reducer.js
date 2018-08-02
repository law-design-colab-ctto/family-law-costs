import { CHOOSE_PERSONA_ACTION_TYPES } from "./choose-persona.constants";

const CHOOSE_PERSONA_INITIAL_STATE = {
  stageFilter: ""
};

export const choosePersonaReducer = (
  state = CHOOSE_PERSONA_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case CHOOSE_PERSONA_ACTION_TYPES.SET_PERSONA_STAGE_FILTER: {
      return {
        ...state,
        stageFilter: action.payload.stage
      };
    }
    default:
      return state;
  }
};
