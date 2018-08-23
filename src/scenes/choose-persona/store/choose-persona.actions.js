import { CHOOSE_PERSONA_ACTION_TYPES } from "./choose-persona.constants";

export const setFilter = ({ filterType, filterValue }) => ({
  type: CHOOSE_PERSONA_ACTION_TYPES.SET_FILTER,
  payload: { filterType, filterValue }
});

export const clearFilter = ({ filterType }) => ({
  type: CHOOSE_PERSONA_ACTION_TYPES.CLEAR_FILTER,
  payload: { filterType }
});

export const clearAllFilters = () => ({
  type: CHOOSE_PERSONA_ACTION_TYPES.CLEAR_ALL_FILTERS
});
