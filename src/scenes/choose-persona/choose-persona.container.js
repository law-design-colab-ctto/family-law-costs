import { connect } from "react-redux";
import { SelectPersonaComponent } from "./choose-persona.component";
import { choosePersonaConnector } from "./store/choose-persona.selectors";
import { setPersonaStageFilter } from "./store/choose-persona.actions";

const dispatchers = {
  setPersonaStageFilter
};

export const SelectPersonaContainer = connect(
  choosePersonaConnector,
  dispatchers
)(SelectPersonaComponent);
