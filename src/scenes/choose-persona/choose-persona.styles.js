import styled from "styled-components";
import { colours, spacing } from "src/styles";
import { fontSizes } from "../../styles/fontSizes";
import Grid from "@material-ui/core/Grid";

export const ChoosePersonaHeader = styled.h2`
  color: ${colours.red};
`;

export const PersonaCardsContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MainHeader = styled(Grid)`
  background-color: ${colours.darkIndigo};
  color: ${colours.white};
  font-weight: 400;
  font-size: ${fontSizes.p};
  padding: ${spacing.four} ${spacing.five};
`;

export const DescriptiveSection = styled(Grid)`
  background-color: ${colours.mediumIndigo};
  color: ${colours.white};
  font-size: ${fontSizes.title};
  padding: ${spacing.four} ${spacing.five};
  font-weight: 500;
  line-height: 1.8rem;
`;

export const MissionHeader = styled.h3`
  margin: 0;
  padding-bottom: ${spacing.two};
  text-transform: uppercase;
  font-weight: 400;
  font-size: ${fontSizes.p};
`;

export const ChoosePersonaMainSection = styled(Grid)`
  padding: ${spacing.five} ${spacing.five} 0 ${spacing.five};
`;

export const OutOfPocketHeader = styled.h1`
  margin: 0;
  padding-right: ${spacing.five};
  font-weight: 500;
  font-size: ${fontSizes.display};
`;

export const OutOfPocketSubHeader = styled.h2`
  margin: 0;
  padding-right: ${spacing.five};
  font-weight: 400;
`;

export const ChoosePersonaPersonasSection = styled(Grid)`
  padding: ${spacing.four} ${spacing.one} 0 ${spacing.five};
  background-color: ${colours.lightGrey};
  box-shadow: inset 0px 0px 30px 5px ${colours.mediumGray};
`;

export const PersonasHeader = styled.h3`
  font-size: 14px;
  margin-bottom: ${spacing.four};
`;

export const ToolDescription = styled.div`
  font-size: ${fontSizes.subtitle};
  line-height: 1.6rem;

  & p:first-child {
    margin-top: 0;
  }
`;

export const MainFooter = styled.div`
  background-color: ${colours.darkIndigo};
  padding: ${spacing.four} ${spacing.five};
  margin-top: ${spacing.four}
`;
