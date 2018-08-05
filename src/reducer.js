import { combineReducers } from "redux";
import { choosePersonaReducer } from "src/scenes/choose-persona/store/choose-persona.reducer";
import { personasReducer } from "src/scenes/personas/store/personas.reducer";
export const rootReducer = combineReducers({
  choosePersona: choosePersonaReducer,
  personas: personasReducer
});
