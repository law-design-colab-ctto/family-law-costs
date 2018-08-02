import React from "react";
import PropTypes from "prop-types";

import {
  ChoosePersonaHeader,
  PersonaCardDiv,
  PersonaCardsContainerDiv,
  PersonaName,
  PersonaStage
} from "./choose-persona.styles";

export const SelectPersonaComponent = ({
  setPersonaStageFilter,
  stageFilter,
  personasToDisplay
}) => (
  <div>
    <ChoosePersonaHeader>Choose a persona</ChoosePersonaHeader>
    <div>The current stage filter is: {stageFilter || "none"}</div>
    <div>
      <button onClick={() => setPersonaStageFilter({ stage: "" })}>
        Clear filters
      </button>
      <button onClick={() => setPersonaStageFilter({ stage: "application" })}>
        application
      </button>
      <button
        onClick={() =>
          setPersonaStageFilter({ stage: "separation with children" })
        }
      >
        separation with children
      </button>
      <button onClick={() => setPersonaStageFilter({ stage: "divorce" })}>
        divorce
      </button>
      <button onClick={() => setPersonaStageFilter({ stage: "trial" })}>
        trial
      </button>
      <button onClick={() => setPersonaStageFilter({ stage: "variation" })}>
        variation
      </button>
    </div>
    <PersonaCardsContainerDiv>
      {personasToDisplay.map(persona => (
        <PersonaCardDiv key={persona.name}>
          <PersonaName>{persona.name}</PersonaName>
          <PersonaStage>{persona.stage}</PersonaStage>
        </PersonaCardDiv>
      ))}
    </PersonaCardsContainerDiv>
  </div>
);

SelectPersonaComponent.propTypes = {
  setPersonaStageFilter: PropTypes.func.isRequired,
  stageFilter: PropTypes.string,
  personasToDisplay: PropTypes.array
};
