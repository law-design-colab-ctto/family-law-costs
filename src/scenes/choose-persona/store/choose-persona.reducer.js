import { equals } from "ramda";
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
      const shouldClearFilter = equals(
        state[action.payload.filterType],
        action.payload.filterValue
      );
      const newFilterValue = shouldClearFilter
        ? ""
        : action.payload.filterValue;
      return {
        ...state,
        [action.payload.filterType]: newFilterValue
      };
    }
    default:
      return state;
  }
};
