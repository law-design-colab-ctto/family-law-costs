import styled from "styled-components";
import { colours, spacing, fontSizes } from "src/styles";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
  width: 247px;
  height: 309px;
  margin: 0 ${spacing.five} ${spacing.five}  0;
`;

export const PersonaCardMedia = styled(CardMedia)`
  width: 247px;
  height: 146px;
`;

//styled.h3
export const PersonaName = styled(Typography)`
  font-size: ${fontSizes.title};
  margin-top: ${spacing.one}
  color: black;
`;

//styled.span
export const PersonaAttr = styled(Typography)`
  color: ${colours.darkGrey};
  display: flex;
  flex-direction: row-reverse;;
`;
