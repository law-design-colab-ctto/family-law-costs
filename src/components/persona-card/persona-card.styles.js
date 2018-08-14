import styled from "styled-components";
import { colours, spacing, fontSizes } from "src/styles";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

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

export const PersonaName = styled.h3`
  margin: 0;
  padding-bottom: ${spacing.one};
`;

export const PersonaStage = styled.span`
  color: ${colours.darkGrey};
`;

//maxWidth: 345;
export const StyledCard = styled(Card)`
  width: 247px;
  height: 309px;
  margin: 10px;
`;

//height: 0;
//paddingTop: '56.25%'; // 16:9
export const PersonaCardMedia = styled(CardMedia)`
  width: 247px;
  height: 146px;
`;

export const PersonaCardContent = styled(CardContent)`

`;

export const PersonaName2 = styled.h3`
  font-size: ${fontSizes.title};
`;

export const PersonaAttr = styled.span`
`;
