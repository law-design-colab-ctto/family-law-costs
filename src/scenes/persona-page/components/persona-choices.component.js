import React from "react";
import PropTypes from "prop-types";

import { SectionSubheader, SectionBlock } from "../persona-page.styles";
import { capitalize } from "src/utils";

import { ChooseProvince } from "./choose-province.component";
import { ChooseLocationType } from "./choose-location-type.component";
import { ChooseIncome } from "./choose-income.component";
import { ChooseRepresentation } from "./choose-representation.component";

export const PersonaChoices = props => {
  const { persona } = props;
  return (
    <React.Fragment>
      <SectionSubheader>{`Make choices for ${capitalize(
        persona.name
      )}`}</SectionSubheader>
      <SectionBlock>
        <ChooseProvince {...props} />
        <SectionBlock>
          <ChooseLocationType {...props} />
        </SectionBlock>

        <ChooseIncome {...props} />
        <ChooseRepresentation {...props} />
      </SectionBlock>
    </React.Fragment>
  );
};

PersonaChoices.propTypes = { persona: PropTypes.any };
