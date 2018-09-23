import React from "react";
import PropTypes from "prop-types";
import Slider from "@material-ui/lab/Slider";

import {
  SliderWrapper,
  ControlWrapper,
  PersonaTextRegular
} from "../persona-page.styles";
import { capitalize } from "src/utils";

export const ChooseIncome = ({ income, setIncome, persona, incomeDisplay }) => (
  <React.Fragment>
    <PersonaTextRegular>
      {`${capitalize(persona.name)} makes `}
      <strong>{incomeDisplay}</strong>
      {` a year.`}
    </PersonaTextRegular>
    <ControlWrapper>
      <div>
        <strong>Adjust Income</strong>
      </div>
      <SliderWrapper>
        <Slider
          value={income}
          min={0}
          max={100000}
          step={10000}
          onChange={(e, val) => setIncome({ income: val })}
        />
      </SliderWrapper>
    </ControlWrapper>
  </React.Fragment>
);

ChooseIncome.propTypes = {
  income: PropTypes.number,
  setIncome: PropTypes.func,
  persona: PropTypes.any,
  incomeDisplay: PropTypes.string
};
