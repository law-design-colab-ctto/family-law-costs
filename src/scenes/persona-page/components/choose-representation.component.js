import React from "react";
import PropTypes from "prop-types";

import {
  SectionBlock,
  SectionSmallSubheader,
  ButtonControlWrapper,
  ButtonSetWrapper,
  ButtonOption,
  InformationNotice
} from "../persona-page.styles";
import { capitalize } from "src/utils";

export const ChooseRepresentation = ({
  persona,
  isEligibleForLegalAid,
  eligibilityReasons,
  setLawyer,
  hasLawyer
}) => (
  <React.Fragment>
    <SectionBlock>
      <SectionSmallSubheader>
        <strong>{`In this case ${
          persona.pronouns.subjective
        } is represented by`}</strong>
      </SectionSmallSubheader>
    </SectionBlock>
    <ButtonControlWrapper>
      <ButtonSetWrapper>
        <ButtonOption
          active={hasLawyer === true}
          onClick={() => setLawyer({ hasLawyer: true })}
        >
          Lawyer
        </ButtonOption>
        <ButtonOption
          active={hasLawyer === false}
          onClick={() => setLawyer({ hasLawyer: false })}
        >
          Self
        </ButtonOption>
      </ButtonSetWrapper>
    </ButtonControlWrapper>
    {!isEligibleForLegalAid && (
      <SectionBlock>
        <InformationNotice>
          {`${capitalize(persona.name)} is`}
          <strong>{` not eligible for legal aid because:`}</strong>
          {eligibilityReasons.map(reason => (
            <div key={reason}>- {reason}</div>
          ))}
        </InformationNotice>
      </SectionBlock>
    )}
  </React.Fragment>
);

ChooseRepresentation.propTypes = {
  persona: PropTypes.any,
  isEligibleForLegalAid: PropTypes.bool,
  eligibilityReasons: PropTypes.arrayOf(PropTypes.string),
  setLawyer: PropTypes.any,
  hasLawyer: PropTypes.bool
};
