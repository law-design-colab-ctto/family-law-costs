import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";

import { spacing, colours, fontSizes } from "src/styles";

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

export const PersonaLabel = styled(Chip)`
  margin-bottom: ${spacing.one};
  margin-right: ${spacing.one};
`;

export const PersonaDetails = styled.div`
  font-size: ${fontSizes.p};
  line-height: 1.4rem;
  color: ${colours.grayDark};
  padding-bottom: ${spacing.two};
`;
