import React from "react";

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
          // pull days off work from calculation
        </CenteredContent>
      </OutlinedDisplayCard>
      <OutlinedDisplayCard>
        <Label>Sick days</Label>
        <CenteredContent>
          <PersonaTextBold>5 days</PersonaTextBold>
          // pull days off work from calculation
        </CenteredContent>
      </OutlinedDisplayCard>
      <OutlinedDisplayCard>
        <Label>Total days</Label>
        <CenteredContent>
          <PersonaTextBold>10 days</PersonaTextBold>
          // pull days off work from calculation
        </CenteredContent>
      </OutlinedDisplayCard>
    </DisplayItemsWrapper>
  </React.Fragment>
);
