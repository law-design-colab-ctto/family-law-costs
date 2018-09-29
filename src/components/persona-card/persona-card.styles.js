import styled from "styled-components";
import { colours, spacing, fontSizes } from "src/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from '@material-ui/core/Chip';

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

export const StyledCard = styled(Card)`
  margin: 0 ${spacing.five} ${spacing.five} 0;
  flex-shrink: 0;
  min-width: 20rem;
  display: flex;
  flex-direction: row;
`;

export const PersonaCardMedia = styled(CardMedia)`
  width: 220px;
  height: 290px;
`;

//styled.h3
export const PersonaName = styled.h3`
  font-size: ${fontSizes.title};
  //margin-top: ${spacing.one}
`;

//styled.span
export const PersonaAttr = styled(Typography)`
`;

export const StyledChip = styled(Chip)`
  margin-right: 8px;
  margin-top: 20px;
`;

export const StyledQuote = styled.h3`
  color: ${colours.indigoMediumLight};
  font-size: ${fontSizes.p};
  font-style: italic;
`;

export const PersonaDetails = styled.h3`
  color: ${colours.grayDark}
  font-size: ${fontSizes.p};
`;
