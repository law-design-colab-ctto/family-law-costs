import React from "react";
import PropTypes from "prop-types";

import {
  SectionSmallSubheader,
  OutlinedDisplayCard,
  DisplayItemsWrapper,
  Label,
  CenteredContent,
  PersonaTextBold
} from "../persona-page.styles";
import { colours } from "src/styles";
import { capitalize } from "src/utils";

export const CostsSummaryDisplay = ({ persona }) => (
  <React.Fragment>
    <SectionSmallSubheader textColour={colours.white}>
      <strong>{`These are ${capitalize(
        persona.name
      )}'s Out-of-Pocket Costs`}</strong>
    </SectionSmallSubheader>
    <DisplayItemsWrapper>
      <OutlinedDisplayCard>
        <Label textColour={colours.white}>Costs of the Case</Label>
        <CenteredContent>
          <PersonaTextBold textColour={colours.white}>$52,025</PersonaTextBold>
        </CenteredContent>
      </OutlinedDisplayCard>
      <OutlinedDisplayCard>
        <Label textColour={colours.white}>Other Financial Impacts</Label>
        <CenteredContent>
          <PersonaTextBold textColour={colours.white}>$33,494</PersonaTextBold>
        </CenteredContent>
      </OutlinedDisplayCard>
      <OutlinedDisplayCard>
        <Label textColour={colours.white}>Impact on Stability</Label>
        <CenteredContent>
          <PersonaTextBold textColour={colours.white}>Medium</PersonaTextBold>
        </CenteredContent>
      </OutlinedDisplayCard>
    </DisplayItemsWrapper>
  </React.Fragment>
);

CostsSummaryDisplay.propTypes = {
  income: PropTypes.number,
  setIncome: PropTypes.func,
  persona: PropTypes.any,
  incomeDisplay: PropTypes.string
};
