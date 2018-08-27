import { PERSONA_PAGE_ACTION_TYPES } from "./persona-page.constants";

const PERSONA_PAGE_INITIAL_STATE = {
  income: 0,
  province: "ontario",
  hasLawyer: false
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
    case PERSONA_PAGE_ACTION_TYPES.SET_PROVINCE: {
      return {
        ...state,
        province: action.payload.province
      };
    }
    case PERSONA_PAGE_ACTION_TYPES.SET_LAWYER: {
      return {
        ...state,
        hasLawyer: action.payload.hasLawyer
      };
    }
    default:
      return state;
  }
};
