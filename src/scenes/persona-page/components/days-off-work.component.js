import React from "react";
import PropTypes from "prop-types";

import {
  SectionSubheader,
  DisplayItemsWrapper,
  TallOutlinedDisplayCard,
  Label,
  CenteredContentColumn,
  PersonaTextBold,
  DaysOffWorkImage
} from "../persona-page.styles";
export const DaysOffWork = ({ daysOffWork }) => (
  <React.Fragment>
    <SectionSubheader>Days off work</SectionSubheader>
    <DisplayItemsWrapper>
      <TallOutlinedDisplayCard>
        <Label>Prep days and court events</Label>
        <CenteredContentColumn>
          <DaysOffWorkImage imageName="CourtDays" />
          <PersonaTextBold>{daysOffWork.courtDays} days</PersonaTextBold>
        </CenteredContentColumn>
      </TallOutlinedDisplayCard>
      <TallOutlinedDisplayCard>
        <Label>Days missed for Health Reasons</Label>
        <CenteredContentColumn>
          <DaysOffWorkImage imageName="SickDays" />
          <PersonaTextBold>{daysOffWork.sickDays} days</PersonaTextBold>
        </CenteredContentColumn>
      </TallOutlinedDisplayCard>
      <TallOutlinedDisplayCard>
        <Label>Total days missed</Label>
        <CenteredContentColumn>
          <DaysOffWorkImage imageName="TotalDays" />
          <PersonaTextBold>{daysOffWork.totalDays} days</PersonaTextBold>
        </CenteredContentColumn>
      </TallOutlinedDisplayCard>
    </DisplayItemsWrapper>
  </React.Fragment>
);

DaysOffWork.propTypes = {
  daysOffWork: PropTypes.objectOf(PropTypes.number)
};
