import styled from "styled-components";
import { colours, spacing } from "src/styles";

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
