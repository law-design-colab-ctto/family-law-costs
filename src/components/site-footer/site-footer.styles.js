import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

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

export const Copyright = styled(Grid)`
  display: flex;
  padding-right: 1rem;
  color: ${colours.white};
`;

export const SponsorLogos = styled(Grid)`
  display: flex;
`;
