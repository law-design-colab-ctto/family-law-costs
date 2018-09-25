import { PERSONA_PAGE_ACTION_TYPES } from "./persona-page.constants";

export const setIncome = ({ income }) => ({
  type: PERSONA_PAGE_ACTION_TYPES.SET_INCOME,
  payload: { income }
});

export const setProvince = ({ province }) => ({
  type: PERSONA_PAGE_ACTION_TYPES.SET_PROVINCE,
  payload: { province }
});

export const setLawyer = ({ hasLawyer }) => ({
  type: PERSONA_PAGE_ACTION_TYPES.SET_LAWYER,
  payload: { hasLawyer }
});

export const setLocationType = ({ locationType }) => ({
  type: PERSONA_PAGE_ACTION_TYPES.SET_LOCATION_TYPE,
  payload: { locationType }
});

export const setModal = ({ modalIsOpen }) => ({
  type: PERSONA_PAGE_ACTION_TYPES.SET_MODAL,
  payload: { modalIsOpen }
});
