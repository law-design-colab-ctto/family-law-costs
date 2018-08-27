import { connect } from "react-redux";
import { PersonaPageComponent } from "./persona-page.component";
import { personasConnector } from "./store/persona-page.selectors";
import {
  setIncome,
  setProvince,
  setLawyer
} from "./store/persona-page.actions";

const dispatchers = { setIncome, setProvince, setLawyer };

export const PersonaPageContainer = connect(
  personasConnector,
  dispatchers
)(PersonaPageComponent);
