import { connect } from "react-redux";
import { PersonaPageComponent } from "./persona-page.component";
import { personasConnector } from "./store/persona-page.selectors";
import { setIncome, setProvince } from "./store/persona-page.actions";

const dispatchers = { setIncome, setProvince };

export const PersonaPageContainer = connect(
  personasConnector,
  dispatchers
)(PersonaPageComponent);
