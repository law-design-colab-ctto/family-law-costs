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
