import { CHOOSE_PERSONA_ACTION_TYPES } from "./choose-persona.constants";
import { PERSONAS } from "src/data/personas";

const CHOOSE_PERSONA_INITIAL_STATE = {
  stageFilter: "",
  personas: PERSONAS
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
