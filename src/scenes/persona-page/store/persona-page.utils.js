import { toLower, pipe, map, indexBy, prop, match } from "ramda";

const nameToLowercase = persona => ({
  ...persona,
  name: toLower(persona.name)
});

export const createPersonasObject = pipe(
  map(nameToLowercase),
  indexBy(prop("name"))
);

export const numberToMoneyDisplay = number =>
  `$${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

export const pathnameToPersona = pathname =>
  pipe(
    match(/\/persona\/(.*)/),
    results => results[1],
    toLower
  )(pathname);
