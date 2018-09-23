import React from "react";
import PropTypes from "prop-types";
import Slider from "@material-ui/lab/Slider";

import {
  SectionSubheader,
  DisplayItemsWrapper,
  OutlinedDisplayCard,
  Label,
  CenteredContent,
  PersonaTextBold
} from "../persona-page.styles";
export const DaysOffWork = () => (
  <React.Fragment>
    <SectionSubheader>Days off work</SectionSubheader>
    <DisplayItemsWrapper>
      <OutlinedDisplayCard>
        <Label>Prep days and court events</Label>
        <CenteredContent>
          <PersonaTextBold>5 days</PersonaTextBold>
        </CenteredContent>
      </OutlinedDisplayCard>
      <OutlinedDisplayCard>
        <Label>Sick days</Label>
        <CenteredContent>
          <PersonaTextBold>5 days</PersonaTextBold>
        </CenteredContent>
      </OutlinedDisplayCard>
      <OutlinedDisplayCard>
        <Label>Total days</Label>
        <CenteredContent>
          <PersonaTextBold>10 days</PersonaTextBold>
        </CenteredContent>
      </OutlinedDisplayCard>
    </DisplayItemsWrapper>
  </React.Fragment>
);
