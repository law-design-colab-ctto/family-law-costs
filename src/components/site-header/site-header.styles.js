import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import { colours, spacing, fontSizes } from "src/styles";

export const HeaderGrid = styled(Grid)`
  background-color: ${colours.periwinkleBlue};
  color: ${colours.white};
  font-weight: 400;
  font-size: ${fontSizes.p};
  padding: ${spacing.four} ${spacing.five};
`;
