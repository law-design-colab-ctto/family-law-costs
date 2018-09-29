import styled from "styled-components";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import { capitalize } from "src/utils";

import { spacing, colours, fontSizes } from "src/styles";

export const StyledCard = styled(Card)`
  padding: ${spacing.four};
  background-color: ${colours.grayMediumLight};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
`;

export const PersonaCardMedia = styled.div`
  background-image: url("/assets/${props =>
    capitalize(props.name)}-card@3x.png");
  @media only screen and (max-device-width: 480px) {
    background-image: url("/assets/${props =>
      capitalize(props.name)}-card@1x.png");
  }
  background-position: top; 
  background-repeat: no-repeat; 
  background-size: contain; 
  flex: 1 0 30%;
  height: 15rem;
  margin: ${spacing.three} 0;
`;

export const PersonaLabel = styled(Chip)`
  margin-bottom: ${spacing.one};
  margin-right: ${spacing.one};
`;

export const PersonaDetails = styled.div`
  font-size: ${fontSizes.p};
  line-height: 1.4;
  color: ${colours.black};
  padding-bottom: ${spacing.two};
`;

export const PersonaContent = styled(CardContent)`
  flex: 0 1 70%;
`;
export const PersonaQuote = styled.div`
  padding: ${spacing.two} ${spacing.three};
  color: ${colours.black};
`;
