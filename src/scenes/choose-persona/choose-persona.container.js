import { connect } from "react-redux";
import { ChoosePersonaComponent } from "./choose-persona.component";
import { choosePersonaConnector } from "./store/choose-persona.selectors";
import { setPersonaStageFilter } from "./store/choose-persona.actions";

const dispatchers = {
  setPersonaStageFilter
};

export const ChoosePersonaContainer = connect(
  choosePersonaConnector,
  dispatchers
)(ChoosePersonaComponent);
