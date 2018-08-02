import { connect } from "react-redux";
import { PersonaPageComponent } from "./persona-page.component";
import { personasConnector } from "./store/persona-page.selectors";

const dispatchers = {};

export const PersonaPageContainer = connect(
  personasConnector,
  dispatchers
)(PersonaPageComponent);
