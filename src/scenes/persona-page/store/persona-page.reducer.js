import { PERSONA_PAGE_ACTION_TYPES } from "./persona-page.constants";

const PERSONA_PAGE_INITIAL_STATE = {
  income: 0
};

export const personaPageReducer = (
  state = PERSONA_PAGE_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case PERSONA_PAGE_ACTION_TYPES.SET_INCOME: {
      return {
        ...state,
        income: action.payload.income
      };
    }
    default:
      return state;
  }
};
