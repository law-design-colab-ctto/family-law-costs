import React from "react";
import PropTypes from "prop-types";

import {
  SectionSubheader,
  PersonaTextRegular,
  CostDisplay,
  CostSectionWrapper,
  CostTextContentWrapper
} from "../persona-page.styles";
import { capitalize } from "src/utils";

export const LegalCosts = ({ legalFees, persona }) => (
  <CostSectionWrapper>
    <CostTextContentWrapper>
      <SectionSubheader>Legal Costs</SectionSubheader>
      <PersonaTextRegular>
        {`Includes court fees, professional fees (e.g. accountants to help with financial disclosure), and lawyer fees (if ${capitalize(
          persona.name
        )} has a lawyer and is not eligible for legal aid)`}
      </PersonaTextRegular>
    </CostTextContentWrapper>

    <CostDisplay>{legalFees}</CostDisplay>
  </CostSectionWrapper>
);

LegalCosts.propTypes = {
  persona: PropTypes.any,
  legalFees: PropTypes.string,
  hasLawyer: PropTypes.bool
};
