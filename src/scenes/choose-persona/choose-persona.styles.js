import styled from "styled-components";
import { colours, spacing } from "src/styles";
import { ButtonReset } from "src/components";
import { fontSizes } from "../../styles/fontSizes";
import Grid from "@material-ui/core/Grid";

export const ChoosePersonaHeader = styled.h2`
  color: ${colours.red};
`;

export const PersonaCardsContainerDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
  width: 100%;
  & > div {
    margin: 0 ${spacing.four} ${spacing.five} ${spacing.four};
  }
`;

export const MainHeader = styled(Grid)`
  background-color: ${colours.periwinkleBlue};
  color: ${colours.white};
  font-weight: 400;
  font-size: ${fontSizes.p};
  padding: ${spacing.four} ${spacing.five};
`;

export const DescriptiveSection = styled(Grid)`
  background-color: ${colours.grayMediumLight};
  color: ${colours.black};
  font-size: ${fontSizes.display1};
  padding: ${spacing.five} ${spacing.five};
  font-weight: 500;
  line-height: 1.4;
`;

export const DescriptionSectionImages = styled.div`
  font-size: ${fontSizes.display4};
  padding-top: ${spacing.three};
`;

export const MissionHeader = styled.h3`
  margin: 0;
  padding-bottom: ${spacing.two};
  text-transform: uppercase;
  font-weight: 400;
  font-size: ${fontSizes.subtitle};
`;

export const ChoosePersonaMainSection = styled.div`
  background-color: ${props => (props.colour ? props.colour : colours.white)};
  padding: ${spacing.five};
`;

export const OutOfPocketHeader = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: ${fontSizes.display};
  line-height: 1.2;
`;

export const OutOfPocketSubHeader = styled.h2`
  margin: 0;
  font-weight: 400;
  padding-bottom: ${spacing.four};
`;

export const ChoosePersonaPersonasSection = styled(Grid)`
  padding: ${spacing.four} ${spacing.one} ${spacing.four} ${spacing.one};
  background-color: ${colours.lightGrey};
  box-shadow: inset 0px 0px 30px 5px ${colours.grayMedium};
`;

export const PersonasHeader = styled.h3`
  font-size: ${fontSizes.p};
  padding-bottom: ${spacing.four};
  padding-left: ${spacing.four};
`;

export const ToolDescription = styled.div`
  font-size: ${fontSizes.title};
  line-height: 1.4;

  & p:first-child {
    margin-top: 0;
  }
`;

export const MainFooter = styled.div`
  background-color: ${colours.periwinkleBlue};
  padding: ${spacing.four} ${spacing.five};
  margin-top: ${spacing.four};
`;

export const InlineTextLinkSpan = styled.span`
  color: ${colours.periwinkleBlue};
  cursor: pointer;
  font-weight: 500;
`;

export const NoPersonasTextSpan = styled.span`
  padding-bottom: ${spacing.three};
  padding-left: ${spacing.four};
`;

export const FiltersSectionTitle = styled.div`
  padding-bottom: ${spacing.three};
  color: ${colours.black};
  text-decoration: underline;
`;

export const FilterControlWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  padding: ${spacing.four} 0;
`;

export const StressSliderWrapper = styled.div`
  .stress-slider .track.trackBefore {
    background-color: ${colours.greenDark};
  }
  .stress-slider .thumb {
    background-color: ${colours.greenDark};
  }
  .stress-slider .track.trackAfter {
    background-color: ${colours.greenLight};
  }
`;

export const StressSliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StressFilterButton = styled(ButtonReset)`
  font-size: ${fontSizes.p};
  padding: ${spacing.two};
  border-radius: 10px;
  &:hover {
    background-color: ${colours.greenLight};
  }
`;

export const ClearAllLabel = styled.span`
  padding-left: ${spacing.three};
  color: ${colours.grayDark};
  font-size: ${fontSizes.description};
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 400;
  &:hover {
    color: ${colours.indigoDark};
  }
`;
