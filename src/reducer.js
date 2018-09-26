import { combineReducers } from "redux";
import { choosePersonaReducer } from "src/scenes/choose-persona/store/choose-persona.reducer";
import { personaPageReducer } from "src/scenes/persona-page/store/persona-page.reducer";

export const rootReducer = combineReducers({
  choosePersona: choosePersonaReducer,
  personaPage: personaPageReducer
});
