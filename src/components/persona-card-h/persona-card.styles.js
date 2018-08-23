import styled from "styled-components";
import { spacing } from "src/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

export const StyledCard = styled(Card)`
  margin: 0 ${spacing.four} ${spacing.five} ${spacing.four};
  min-width: 20rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: "column";
`;

export const PersonaCardMedia = styled(CardMedia)`
  width: 240px;
  height: 240px;
`;
