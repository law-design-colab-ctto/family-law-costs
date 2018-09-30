import styled from "styled-components";

import { spacing, fontSizes, colours } from "src/styles";
import { ButtonReset, HrReset } from "src/components";

export const PersonaTextRegular = styled.div`
  padding: ${spacing.three} 0;
  font-size: ${fontSizes.subtitle};
  color: ${props => (props.textColour ? props.textColour : colours.black)};
`;

export const PersonaTextBold = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : fontSizes.subtitle)};
  font-weight: 500;
  padding: ${spacing.three} 0;
  color: ${props => (props.textColour ? props.textColour : colours.black)};
  & a {
    color: ${props => (props.textColour ? props.textColour : colours.black)};
  }
`;

export const PersonaTextBoldNoPadding = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : fontSizes.subtitle)};
  font-weight: 500;
  color: ${props => (props.textColour ? props.textColour : colours.black)};
  & a {
    color: ${props => (props.textColour ? props.textColour : colours.black)};
  }
`;

export const MoreDetailsButton = styled(ButtonReset)`
  border-radius: 3px;
  background-color: ${colours.periwinkleBlueLighter};
  color: ${colours.periwinkleBlue};
  text-transform: uppercase;
  padding: ${spacing.two} ${spacing.three};
  font-size: ${fontSizes.p};
  margin-top: ${spacing.four};
`;

export const SectionHeader = styled.h2`
  margin: 0;
  font-size: ${fontSizes.display2};
  color: ${props =>
    props.textColour ? props.textColour : colours.periwinkleBlue};
  font-weight: 400;
  padding-bottom: ${spacing.three};

  @media only screen and (max-device-width: 480px) {
    line-height: 1.1;
    font-size: ${fontSizes.display1};
  }
`;

export const SectionSubheader = styled.h3`
  margin: 0;
  font-size: ${fontSizes.display1};
  font-weight: 400;
  color: ${props => (props.textColour ? props.textColour : colours.black)};
  @media only screen and (max-device-width: 480px) {
    line-height: 1.1;
  }
`;

export const SectionSmallSubheader = styled.h4`
  margin: 0;
  font-size: ${fontSizes.heading};
  font-weight: 400;
  color: ${props => (props.textColour ? props.textColour : colours.black)};
`;

export const SectionBlock = styled.div`
  padding: ${spacing.three} 0;
`;

export const Subsection = styled.div`
  padding: ${spacing.three} 0 ${spacing.five} 0;
`;

export const CenteredContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CenteredContentColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const ControlWrapper = styled.div`
  display: flex;
  padding: ${spacing.two} 0;
`;

export const DropdownControlWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: ${spacing.two} 0 ${spacing.three} 0;
`;

export const SliderWrapper = styled.div`
  flex-grow: 1;
  margin-left: ${spacing.two};
`;

export const DropdownWrapper = styled.div`
  flex-grow: 0;
  margin-left: ${spacing.two};
`;

export const ButtonControlWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${spacing.two} 0;
`;

export const ButtonSetWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

export const ButtonOption = styled(ButtonReset)`
  font-size: ${fontSizes.p};
  padding: ${spacing.three} ${spacing.five};
  font-weight: 400;
  background-color: ${props =>
    props.active ? colours.periwinkleBlue : colours.periwinkleBlueLight};
  color: ${props => (props.active ? colours.white : colours.black)};
  margin-right: 3px;
  text-transform: uppercase;

  &:hover {
    background-color: ${props =>
      props.active ? colours.periwinkleBlue : colours.periwinkleBlueMedium};
    color: ${props => (props.active ? colours.white : colours.white)};
  }

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
    margin-right: 0;
  }
`;
export const ButtonLabelWrapper = styled.div`
  display: flex;
  flex-grow: 0;
  justify-content: center;
  padding: ${spacing.one} 0;
`;

export const InformationNotice = styled.div`
  padding: ${spacing.one} 0;
  font-size: ${fontSizes.description};
`;

export const InformationCard = styled.div`
  border-radius: 3px;
  border: 2px solid ${colours.periwinkleBlue};
  padding: ${spacing.four};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-size: ${fontSizes.p};
  color: ${props => (props.textColour ? props.textColour : colours.black)};
`;

export const CostDisplay = styled.div`
  font-size: ${fontSizes.display1};
  font-weight: 600;
`;

export const LargeCostDisplay = styled.div`
  font-size: ${fontSizes.display2};
  font-weight: 500;
`;

export const TotalCostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.2;
  padding-top: ${spacing.three};
`;

export const LabelledImageButton = styled(ButtonReset)`
  border: 1px solid
    ${props =>
      props.active ? colours.periwinkleBlue : colours.periwinkleBlueLight};
  border-radius: 3px;
  padding: ${spacing.three} ${spacing.three} 0 ${spacing.three};
  margin: ${spacing.two} ${spacing.three} ${spacing.two} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${fontSizes.display5};
  background-color: ${props =>
    props.active ? colours.periwinkleBlueLight : colours.periwinkleBlueLighter};
  &:hover {
    background-color: ${colours.periwinkleBlueLight};
    border-color: ${props =>
      props.active ? colours.periwinkleBlue : colours.periwinkleBlueMedium};
  }
  &:first-child {
    margin-left: 0;
  }
`;

export const ImageButtonLabel = styled.label`
  padding: ${spacing.one} 0;
  font-size: ${fontSizes.p};
`;

export const DisplayItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: ${spacing.four};
  @media only screen and (max-device-width: 480px) {
    justify-content: center;
  }
`;

export const SectionDivider = styled(HrReset)`
  border-bottom: 1px solid
    ${props => (props.colour ? props.colour : colours.indigoDark)};
  width: 100%;
  margin: ${spacing.three} 0;
`;

export const OutlinedDisplayCard = styled.div`
  border: ${props => (props.borderWidth ? props.borderWith : "1px")} solid
    ${props => (props.borderColour ? props.borderColour : colours.grayMedium)};
  border-radius: 3px;
  padding: ${spacing.three};
  margin: ${spacing.two} ${spacing.three} ${spacing.two} 0;
  width: 9rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.2;
`;

export const HighlightedNote = styled.div`
  background-color: ${colours.yellowLight};
  width: 100%;
  padding: ${spacing.three} ${spacing.four};
`;

export const CostSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CostTextContentWrapper = styled.div`
  flex-grow: 1;
  padding-right: ${spacing.three};
`;
export const CostNumberDisplayWrapper = styled.div`
  flex-grow: 0;
`;
export const QuoteBlock = styled.div`
  font-size: ${fontSizes.p};
  margin: 0 ${spacing.five};
  padding: 0 ${spacing.three};
  background-color: ${props =>
    props.bgColour ? props.bgColour : colours.periwinkleBlueLighter};
  @media only screen and (max-device-width: 480px) {
    margin: 0 ${spacing.one};
  }
`;

export const ImageDiv = styled.div`
  background-image: url("/assets/${props => props.imageName}@3x.png");
  @media only screen and (max-device-width: 480px) {
    background-image: url("/assets/${props => props.imageName}.png");
  }
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const DistanceImage = ImageDiv.extend`
  width: 6rem;
  height: 6rem;
`;

export const ModalContentWrapper = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colours.white};
  color: ${colours.black};
  position: relative;
  padding: ${spacing.five};
  border-radius: 1rem;
  max-width: 60%;
  max-height: 90%;
  overflow-y: scroll;
  outline: 0;
  font-weight: 500;
  @media only screen and (max-device-width: 480px) {
    max-width: 90%;
    padding: ${spacing.four};
  }
`;

export const CloseModalButton = styled(ButtonReset)`
  text-transform: uppercase;
  font-size: ${fontSizes.p};
  color: ${colours.periwinkleBlue};
  background-color: ${colours.periwinkleBlueLighter};
  padding: ${spacing.three};
  margin-top: ${spacing.one};
  &:hover {
    background-color: ${colours.periwinkleBlueDark};
    color: ${colours.white};
  }
`;
export const OpenModalButton = styled(ButtonReset)`
  font-size: ${fontSizes.subtitle};
  color: ${colours.periwinkleBlue};
  text-decoration: underline;
  &:hover {
    color: ${colours.violet};
  }
`;

export const TallOutlinedDisplayCard = OutlinedDisplayCard.extend`
  height: 14rem;
  width: 10rem;
  padding-bottom: 0;
`;

export const DaysOffWorkImage = ImageDiv.extend`
  width: 6rem;
  height: 6rem;
  margin: ${spacing.one} 0;
`;

export const ThermometerImage = ImageDiv.extend`
  width: 4rem;
  height: 7rem;
`;

export const InstabilityImage = ImageDiv.extend`
  width: 100%;
  height: 30rem;
`;

export const WhatIfCalculations = styled.div`
`;
