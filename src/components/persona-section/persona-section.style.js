import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import { spacing } from "src/styles";

export const PersonaSectionContent = styled(Grid)`
  background-color: ${props => props.colour};
  padding: ${spacing.five} ${spacing.four};
`;

export const PersonaSectionSide = styled(Grid)`
  background-color: ${props => props.colour};
`;
