import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import { colours, spacing, fontSizes } from "src/styles";

export const HeaderGrid = styled(Grid)`
  background-color: ${colours.periwinkleBlue};
  color: ${colours.white};
  font-weight: 600;
  padding: ${spacing.four} ${spacing.five};
`;

export const SiteTitleWrapper = styled(Grid)`
  max-width: 8rem;
  font-size: ${fontSizes.subtitle};
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colours.white};
`;

export const LinksWrapper = styled(Grid)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & > a {
    white-space: nowrap;
    font-size: ${fontSizes.title};
    padding-right: ${spacing.three};
  }
  & > a:last-child {
    padding-right: 0;
  }
`;
