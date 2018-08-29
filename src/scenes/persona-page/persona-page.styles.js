import styled from "styled-components";

import { spacing, fontSizes, colours } from "src/styles";
import { ButtonReset } from "src/components";

export const PersonaTextRegular = styled.div`
  padding: ${spacing.three} 0;
  font-size: ${fontSizes.subtitle};
`;

export const PersonaTextBold = styled.div`
  font-size: ${fontSizes.subtitle};
  font-weight: 500;
  padding: ${spacing.three} 0;
`;

export const MoreDetailsButton = styled(ButtonReset)`
  border-radius: 3px;
  background-color: ${colours.lighterIndigo};
  color: ${colours.darkIndigo};
  text-transform: uppercase;
  padding: ${spacing.two} ${spacing.three};
  font-size: ${fontSizes.p};
  margin-top: ${spacing.four};
`;

export const SectionHeader = styled.h2`
  margin: 0;
  font-size: ${fontSizes.display2};
  color: ${colours.black};
  font-weight: 400;
  padding-bottom: ${spacing.three};
`;

export const SectionSubheader = styled.h3`
  margin: 0;
  font-size: ${fontSizes.display1};
  font-weight: 400;
  color: ${colours.black};
`;

export const SectionSmallSubheader = styled.h4`
  margin: 0;
  font-size: ${fontSizes.heading};
  font-weight: 400;
  color: ${colours.black};
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

export const ControlWrapper = styled.div`
  display: flex;
  padding: ${spacing.two} 0;
`;

export const DropdownControlWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: ${spacing.two} 0;
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
    props.active ? colours.darkIndigo : colours.lightIndigo};
  color: ${props => (props.active ? colours.white : colours.black)};
  margin-right: 3px;
  text-transform: uppercase;

  &:hover {
    background-color: ${props =>
      props.active ? colours.darkIndigo : colours.mediumIndigo};
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
  border: 2px solid ${colours.darkIndigo};
  padding: ${spacing.four};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-size: ${fontSizes.p};
`;

export const CostDisplay = styled.div`
  font-size: ${fontSizes.display2};
  font-weight: 500;
`;

export const TotalCostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.2;
`;
