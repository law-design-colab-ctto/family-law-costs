import React from "react";

import {
  HeaderGrid,
  SiteTitleWrapper,
  LinksWrapper,
  NavLink,
  SiteLogoDiv
} from "./site-header.styles";

export const SiteHeader = () => (
  <HeaderGrid item xs={12} container>
    <SiteTitleWrapper item>
      <SiteLogoDiv />
      <NavLink to="/">Out-of-Pocket</NavLink>
    </SiteTitleWrapper>
    <LinksWrapper item>
      <NavLink to="/about">About Out-of-Pocket</NavLink>
      <NavLink to="/methodology">Methodology</NavLink>
    </LinksWrapper>
  </HeaderGrid>
);
