import React from "react";
import PropTypes from "prop-types";
import { equals } from "ramda";

import { PlaceholderImage } from "src/assets/icons";

import {
  DisplayItemsWrapper,
  LabelledImageButton,
  ImageButtonLabel
} from "../persona-page.styles";
import { capitalize } from "src/utils";

export const ChooseLocationType = ({
  persona,
  setLocationType,
  locationType
}) => (
  <React.Fragment>
    {" "}
    <div>{`${capitalize(persona.pronouns.subjective)} lives in a:`}</div>
    <DisplayItemsWrapper>
      <LabelledImageButton
        active={equals(locationType, "urban")}
        onClick={() => setLocationType({ locationType: "urban" })}
      >
        <PlaceholderImage fontSize="inherit" />
        <ImageButtonLabel>Urban Area</ImageButtonLabel>
      </LabelledImageButton>
      <LabelledImageButton
        active={equals(locationType, "remote")}
        onClick={() => setLocationType({ locationType: "remote" })}
      >
        <PlaceholderImage fontSize="inherit" />
        <ImageButtonLabel>Remote Area</ImageButtonLabel>
      </LabelledImageButton>
      <LabelledImageButton
        active={equals(locationType, "rural")}
        onClick={() => setLocationType({ locationType: "rural" })}
      >
        <PlaceholderImage fontSize="inherit" />
        <ImageButtonLabel>Rural Area</ImageButtonLabel>
      </LabelledImageButton>
    </DisplayItemsWrapper>
  </React.Fragment>
);

ChooseLocationType.propTypes = {
  persona: PropTypes.any,
  setLocationType: PropTypes.func,
  locationType: PropTypes.string
};
