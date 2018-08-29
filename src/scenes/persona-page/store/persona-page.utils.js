import { toLower, pipe, map, indexBy, prop } from "ramda";

const nameToLowercase = persona => ({
  ...persona,
  name: toLower(persona.name)
});

const addDisplayName = persona => ({
  ...persona,
  displayName: persona.name
});

export const createPersonasObject = pipe(
  map(
    pipe(
      addDisplayName,
      nameToLowercase
    )
  ),
  indexBy(prop("name"))
);

export const numberToMoneyDisplay = number =>
  `$${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
