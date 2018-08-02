import { toLower, pipe, map, indexBy, prop } from "ramda";

const nameToLowercase = persona => ({
  ...persona,
  name: toLower(persona.name)
});

export const createPersonasObject = pipe(
  map(nameToLowercase),
  indexBy(prop("name"))
);
