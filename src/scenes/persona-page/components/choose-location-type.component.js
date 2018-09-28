import React from "react";
import PropTypes from "prop-types";
import { equals } from "ramda";

import {
  DisplayItemsWrapper,
  LabelledImageButton,
  ImageButtonLabel,
  DistanceImage
} from "../persona-page.styles";
import { capitalize } from "src/utils";

export const ChooseLocationType = ({
  persona,
  setLocationType,
  locationType
}) => (
  <React.Fragment>
    <div>{`Distance from courthouse:`}</div>
    <DisplayItemsWrapper>
      <LabelledImageButton
        active={equals(locationType, "urban")}
        onClick={() => setLocationType({ locationType: "urban" })}
      >
        <DistanceImage imageName="urban" />
        <ImageButtonLabel>Under 20 km</ImageButtonLabel>
      </LabelledImageButton>
      <LabelledImageButton
        active={equals(locationType, "suburban")}
        onClick={() => setLocationType({ locationType: "suburban" })}
      >
        <DistanceImage imageName="suburban" />
        <ImageButtonLabel>20-100 km</ImageButtonLabel>
      </LabelledImageButton>
      <LabelledImageButton
        active={equals(locationType, "remote")}
        onClick={() => setLocationType({ locationType: "remote" })}
      >
        <DistanceImage imageName="remote" />
        <ImageButtonLabel>100-250 km</ImageButtonLabel>
      </LabelledImageButton>
      <LabelledImageButton
        active={equals(locationType, "rural")}
        onClick={() => setLocationType({ locationType: "rural" })}
      >
        <DistanceImage imageName="rural" />
        <ImageButtonLabel>250 km or more</ImageButtonLabel>
      </LabelledImageButton>
    </DisplayItemsWrapper>
  </React.Fragment>
);

ChooseLocationType.propTypes = {
  persona: PropTypes.any,
  setLocationType: PropTypes.func,
  locationType: PropTypes.string
};
