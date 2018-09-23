import { isNil, isEmpty, allPass, pipe, not } from "ramda";

export const isNotNil = pipe(
  isNil,
  not
);
export const isNotEmpty = pipe(
  isEmpty,
  not
);
export const hasValue = allPass([isNotNil, isNotEmpty]);

export const capitalize = str =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
