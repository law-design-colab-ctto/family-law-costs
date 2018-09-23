import React from "react";
import PropTypes from "prop-types";
import { pipe, length, equals } from "ramda";

import { PersonaCardDark } from "src/components";
import {
  PersonasHeader,
  ClearAllLabel,
  PersonaCardsContainerDiv,
  NoPersonasTextSpan,
  InlineTextLinkSpan
} from "../choose-persona.styles";

const noneToDisplay = pipe(
  length,
  equals(0)
);
export const PersonaResults = ({
  jobStabilityFilter,
  stageFilter,
  clearAllFilters,
  personasToDisplay
}) => (
  <React.Fragment>
    <PersonasHeader>
      PERSONAS
      {(jobStabilityFilter || stageFilter) && (
        <ClearAllLabel onClick={clearAllFilters}>
          Clear all filters
        </ClearAllLabel>
      )}
    </PersonasHeader>

    <PersonaCardsContainerDiv>
      {noneToDisplay(personasToDisplay) ? (
        <NoPersonasTextSpan>
          {`Sorry, no personas match these criteria. `}
          <InlineTextLinkSpan onClick={clearAllFilters}>
            {`See all personas.`}
          </InlineTextLinkSpan>
        </NoPersonasTextSpan>
      ) : (
        personasToDisplay.map(persona => (
          <PersonaCardDark key={persona.name} persona={persona} />
        ))
      )}
    </PersonaCardsContainerDiv>
  </React.Fragment>
);

PersonaResults.propTypes = {
  jobStabilityFilter: PropTypes.string,
  stageFilter: PropTypes.string,
  clearAllFilters: PropTypes.func,
  personasToDisplay: PropTypes.array
};
