import React from "react";
import PropTypes from "prop-types";

import { ChoosePersonaHeader } from "./choose-persona.styles";

export const SelectPersonaComponent = ({
  setPersonaStageFilter,
  stageFilter
}) => (
  <div>
    <ChoosePersonaHeader>Choose a persona</ChoosePersonaHeader>
    <div>The current stage filter is: {stageFilter}</div>
    <div>
      <button onClick={() => setPersonaStageFilter({ stage: "early" })}>
        Set to early
      </button>
      <button onClick={() => setPersonaStageFilter({ stage: "late" })}>
        Set to late
      </button>
    </div>
  </div>
);

SelectPersonaComponent.propTypes = {
  setPersonaStageFilter: PropTypes.func.isRequired,
  stageFilter: PropTypes.string
};
