import styled from "styled-components";

import { colours, spacing } from "src/styles";

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${colours.white};
  padding: ${spacing.four};
  background-color: ${colours.periwinkleBlue};
  font-weight: 500;
`;
