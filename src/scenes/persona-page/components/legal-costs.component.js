import React from "react";
import PropTypes from "prop-types";
import { hasValue } from "src/utils";

import {
  SectionSubheader,
  SectionBlock,
  PersonaTextRegular,
  TotalCostsWrapper,
  Label,
  CostDisplay
} from "../persona-page.styles";
import { capitalize } from "src/utils";

export const LegalCosts = ({ legalFees, hasLawyer, persona }) => (
  <React.Fragment>
    <SectionSubheader>Legal Fees</SectionSubheader>
    <PersonaTextRegular>
      {`Includes court fees, professional fees (e.g. accountants to help with financial disclosure), and lawyer fees (if ${capitalize(
        persona.name
      )} has a lawyer and is not eligible for legal aid)`}
    </PersonaTextRegular>
    {hasValue(hasLawyer) && (
      <SectionBlock>
        <TotalCostsWrapper>
          <Label>Total Legal Fees</Label>
          <CostDisplay>{legalFees}</CostDisplay>
        </TotalCostsWrapper>
      </SectionBlock>
    )}
  </React.Fragment>
);

LegalCosts.propTypes = {
  persona: PropTypes.any,
  legalFees: PropTypes.string,
  hasLawyer: PropTypes.bool
};
