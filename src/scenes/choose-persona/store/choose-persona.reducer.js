import { CHOOSE_PERSONA_ACTION_TYPES } from "./choose-persona.constants";

const CHOOSE_PERSONA_INITIAL_STATE = {
  stage: "",
  jobStability: "",
  stressCapacity: ""
};

export const choosePersonaReducer = (
  state = CHOOSE_PERSONA_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case CHOOSE_PERSONA_ACTION_TYPES.SET_FILTER: {
      return {
        ...state,
        [action.payload.filterType]: action.payload.filterValue
      };
    }
    default:
      return state;
  }
};
