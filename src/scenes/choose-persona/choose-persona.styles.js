import styled from "styled-components";
import { colours, spacing } from "src/styles";
import { fontSizes } from "../../styles/fontSizes";
import Grid from "@material-ui/core/Grid";
import { ButtonReset, HrReset } from "src/components";
export const ChoosePersonaHeader = styled.h2`
  color: ${colours.red};
`;

export const PersonaCardDiv = styled.div`
  background-color: ${colours.white};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 3px;
  padding: ${spacing.three};
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 15rem;
  margin: 1rem;
`;

export const PersonaCardsContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PersonaName = styled.h3`
  margin: 0;
  padding-bottom: ${spacing.one};
`;

export const PersonaStage = styled.span`
  color: ${colours.darkGrey};
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

export const FilterButtonSet = styled.div`
  border-radius: 5px;
  display: flex;
  width: 100%;
  margin-bottom: ${spacing.three};
`;

export const FilterButton = styled(ButtonReset)`
  font-size: ${fontSizes.title};
  padding: ${spacing.three} ${spacing.four};
  font-weight: 400;
  flex-grow: 1;
  background-color: ${props =>
    props.active ? colours.darkIndigo : colours.mediumGray};
  color: ${props => (props.active ? colours.white : colours.darkGray)};
  border-right: 1px solid ${colours.white};

  &:hover {
    background-color: ${props =>
      props.active ? colours.darkIndigo : colours.lightIndigo};
    color: ${props => (props.active ? colours.white : colours.darkIndigo)};
  }

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
    border-right: none;
  }
`;

export const FilterButtonSetLabel = styled.h3`
  padding-bottom: ${spacing.three};
  margin: 0;
  font-weight: 500;
  font-size: ${fontSizes.title};
`;

export const Divider = styled(HrReset)`
  border-bottom: 1px solid ${colours.mediumDarkGray};
  width: 100%;
  margin-bottom: ${spacing.three};
`;
