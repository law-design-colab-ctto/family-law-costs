
import styled from "styled-components";
import { spacing } from "src/styles";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from "react-router-dom";



export const StyledCard = styled(Card)`
  width: 580px;
  height: 240px;
  margin: 0 ${spacing.five} ${spacing.five}  0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flexDirection: 'column';
`;

export const PersonaCardMedia = styled(CardMedia)`
  width: 240px;
  height: 240px;
`;
