import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

export const StyledCard = styled(Card)`
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
