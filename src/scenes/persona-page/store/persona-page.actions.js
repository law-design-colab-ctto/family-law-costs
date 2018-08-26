import { PERSONA_PAGE_ACTION_TYPES } from "./persona-page.constants";

export const setIncome = ({ income }) => ({
  type: PERSONA_PAGE_ACTION_TYPES.SET_INCOME,
  payload: { income }
});

export const setProvince = ({ province }) => ({
  type: PERSONA_PAGE_ACTION_TYPES.SET_PROVINCE,
  payload: { province }
});
