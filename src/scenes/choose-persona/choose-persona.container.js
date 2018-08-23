import { connect } from "react-redux";
import { ChoosePersonaComponent } from "./choose-persona.component";
import { choosePersonaConnector } from "./store/choose-persona.selectors";
import {
  setFilter,
  clearAllFilters,
  clearFilter
} from "./store/choose-persona.actions";

const dispatchers = {
  setFilter,
  clearFilter,
  clearAllFilters
};

export const ChoosePersonaContainer = connect(
  choosePersonaConnector,
  dispatchers
)(ChoosePersonaComponent);
