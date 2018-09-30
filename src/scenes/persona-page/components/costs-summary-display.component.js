import React from "react";
import PropTypes from "prop-types";

import {
  SectionSubheader,
  TallOutlinedDisplayCard,
  DisplayItemsWrapper,
  Label,
  CenteredContent,
  PersonaTextBold,
  PersonaTextBoldNoPadding,
  ThermometerImage,
  CenteredContentColumn
} from "../persona-page.styles";
import { colours, fontSizes } from "src/styles";
import { capitalize } from "src/utils";

const impactToImage = {
  low: "ThermoYellow",
  medium: "ThermoOrange",
  high: "ThermoRed"
};

export const CostsSummaryDisplay = ({ persona, impactOnStability = "low" }) => (
  <div>
    <SectionSubheader textColour={colours.white}>
      <strong>{`These are ${capitalize(
        persona.name
      )}'s Out-of-Pocket Costs`}</strong>
    </SectionSubheader>
    <DisplayItemsWrapper>
      <TallOutlinedDisplayCard borderWidth="3px">
        <Label textColour={colours.white}>Costs of the Case</Label>
        <CenteredContent>
          <PersonaTextBold
            textColour={colours.white}
            fontSize={fontSizes.display1}
          >
            $52,025
          </PersonaTextBold>
        </CenteredContent>
        <CenteredContent>
          <PersonaTextBold textColour={colours.white}>
            <a href="#costs-of-the-case">See Why</a>
          </PersonaTextBold>
        </CenteredContent>
      </TallOutlinedDisplayCard>
      <TallOutlinedDisplayCard borderWidth="3px">
        <Label textColour={colours.white}>Other Financial Impacts</Label>
        <CenteredContent>
          <PersonaTextBold
            textColour={colours.white}
            fontSize={fontSizes.display1}
          >
            $33,494
          </PersonaTextBold>
        </CenteredContent>
        <CenteredContent>
          <PersonaTextBold textColour={colours.white}>
            <a href="#other-financial-impacts">See Why</a>
          </PersonaTextBold>
        </CenteredContent>
      </TallOutlinedDisplayCard>
      <TallOutlinedDisplayCard borderWidth="3px">
        <Label textColour={colours.white}>Impact on Stability</Label>
        <CenteredContent>
          <ThermometerImage imageName={impactToImage[impactOnStability]} />
        </CenteredContent>
        <CenteredContentColumn>
          <PersonaTextBoldNoPadding textColour={colours.white}>
            Medium
          </PersonaTextBoldNoPadding>
          <PersonaTextBoldNoPadding textColour={colours.white}>
            <a href="#impact-on-stability">See Why</a>
          </PersonaTextBoldNoPadding>
        </CenteredContentColumn>
      </TallOutlinedDisplayCard>
    </DisplayItemsWrapper>
  </div>
);

CostsSummaryDisplay.propTypes = {
  income: PropTypes.number,
  setIncome: PropTypes.func,
  persona: PropTypes.any,
  incomeDisplay: PropTypes.string,
  impactOnStability: PropTypes.string
};
