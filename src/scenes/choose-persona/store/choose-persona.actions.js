import { CHOOSE_PERSONA_ACTION_TYPES } from "./choose-persona.constants";

export const setFilter = ({ filterType, filterValue }) => ({
  type: CHOOSE_PERSONA_ACTION_TYPES.SET_FILTER,
  payload: { filterType, filterValue }
});
