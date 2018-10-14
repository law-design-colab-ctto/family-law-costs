import styled from "styled-components";
import { colours, spacing, fontSizes } from "src/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export const StyledCard = styled(Card)`
  margin: 0 ${spacing.five} ${spacing.five} 0;
  flex-shrink: 0;
  width: 20rem;
  padding-top: ${spacing.four};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const PersonaCardMedia = styled.div`
  background-image: url("/assets/${props => props.name}-card@3x.png");
  @media only screen and (max-device-width: 480px) {
    background-image: url("/assets/${props => props.name}-card@1x.png");
  }
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: contain; 
  width: 100%;
  height: 15rem;
`;

export const PersonaName = styled.h3`
  font-size: ${fontSizes.title};
`;

export const PersonaAttr = styled(Typography)``;

export const Details = styled.div`
  padding: ${spacing.three} 0;
  color: ${colours.black};
`;
