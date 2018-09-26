import React from "react";
import PropTypes from "prop-types";

import Modal from "@material-ui/core/Modal";
import {
  SectionSubheader,
  PersonaTextRegular,
  CostDisplay,
  CostSectionWrapper,
  CostTextContentWrapper,
  ModalContentWrapper,
  OpenModalButton,
  CloseModalButton
} from "../persona-page.styles";
import { capitalize } from "src/utils";

export const LegalCosts = ({ legalFees, persona, setModal, modalIsOpen }) => (
  <React.Fragment>
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={modalIsOpen}
      onClose={() => setModal({ modalIsOpen: false })}
    >
      <ModalContentWrapper>
        <p>
          {`Your family law matter is likely one of the most important issues you will face in your life. It affects your financial health, relationships with your family and children and, often, has life-long implications. Engaging a professional to assist you with this critical challenge makes sense.`}
        </p>
        <p>
          {`Family law and court proceedings can be complex and stressful. A lawyer knows the process, the strategy and, of course, the law related to your legal problem. The lawyer can ensure that your issues are presented effectively to the court, increasing your chances of a positive outcome and reducing your stress level.`}
        </p>
        <p>
          {`However, for many litigants, the cost of a lawyer is more than they can manage. Some lawyers offer multiple service options that may target the specific legal help you need and potentially reduce the cost. Talk to a family lawyer about your case and explore the options that might be right for you.`}
        </p>
        <CloseModalButton onClick={() => setModal({ modalIsOpen: false })}>
          Close
        </CloseModalButton>
      </ModalContentWrapper>
    </Modal>
    <CostSectionWrapper>
      <CostTextContentWrapper>
        <SectionSubheader>Legal Costs</SectionSubheader>
        <PersonaTextRegular>
          {`Includes court fees, professional fees (e.g. accountants to help with financial disclosure), and lawyer fees (if ${capitalize(
            persona.name
          )} has a lawyer and is not eligible for legal aid)`}
        </PersonaTextRegular>
        <OpenModalButton onClick={() => setModal({ modalIsOpen: true })}>
          Value of having a lawyer
        </OpenModalButton>
      </CostTextContentWrapper>
      <CostDisplay>{legalFees}</CostDisplay>
    </CostSectionWrapper>
  </React.Fragment>
);

LegalCosts.propTypes = {
  persona: PropTypes.any,
  legalFees: PropTypes.string,
  hasLawyer: PropTypes.bool,
  setModal: PropTypes.func,
  modalIsOpen: PropTypes.bool
};
