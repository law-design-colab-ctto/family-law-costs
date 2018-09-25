import React from "react";

import {
  HeaderGrid,
  SiteTitleWrapper,
  LinksWrapper,
  NavLink
} from "./site-header.styles";

export const SiteHeader = () => (
  <HeaderGrid item xs={12} container justify="space-between">
    <SiteTitleWrapper item>
      <NavLink to="/">Out-of-pocket costs</NavLink>
    </SiteTitleWrapper>
    <LinksWrapper item>
      <NavLink to="/about">About us</NavLink>
      <NavLink to="/methodology">Methodology</NavLink>
    </LinksWrapper>
  </HeaderGrid>
);
