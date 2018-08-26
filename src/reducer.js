import { combineReducers } from "redux";
import { choosePersonaReducer } from "src/scenes/choose-persona/store/choose-persona.reducer";
import { personasReducer } from "src/scenes/personas/store/personas.reducer";
import { personaPageReducer } from "src/scenes/persona-page/store/persona-page.reducer";

export const rootReducer = combineReducers({
  choosePersona: choosePersonaReducer,
  personas: personasReducer,
  personaPage: personaPageReducer
});
