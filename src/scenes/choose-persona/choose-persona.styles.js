import styled from "styled-components";
import { colours, spacing } from "src/styles";
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
  line-height: 2.5rem;
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

export const ChoosePersonaMainSection = styled(Grid)`
  padding: ${spacing.five} ${spacing.five} 0 ${spacing.five};
`;

export const OutOfPocketHeader = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: ${fontSizes.display};
`;

export const OutOfPocketSubHeader = styled.h2`
  margin: 0;
  font-weight: 400;
  padding-bottom: ${spacing.five};
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
  font-size: ${fontSizes.subtitle};
  line-height: 1.6rem;

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
