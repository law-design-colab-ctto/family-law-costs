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
  padding: ${spacing.three} 0;
  flex-wrap: wrap;
`;

export const LogoRowsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoLink = styled.a`
  background-image: url("/assets/${props => props.imageName}.png");
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  height: 3rem;
  width: 10rem;
`;
export const LFOLogoLink = styled.a`
  background-image: url("/assets/${props => props.imageName}.png");
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  height: 5rem;
  width: 15rem;
`;
