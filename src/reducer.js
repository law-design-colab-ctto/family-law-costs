import { combineReducers } from "redux";
import { choosePersonaReducer } from "src/scenes/choose-persona/store/choose-persona.reducer";

export const rootReducer = combineReducers({
  choosePersona: choosePersonaReducer
});
