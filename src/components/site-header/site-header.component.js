import React from "react";
import Grid from "@material-ui/core/Grid";

import {
  HeaderGrid,
  SiteTitleWrapper,
  LinksWrapper,
  NavLink
} from "./site-header.styles";

export const SiteHeader = () => (
  <HeaderGrid item xs={12} container spacing={16} justify="space-between">
    <SiteTitleWrapper item>
      <NavLink to="/">Out-of-pocket costs</NavLink>
    </SiteTitleWrapper>
    <LinksWrapper item>
      <NavLink to="/about">About us</NavLink>
      <NavLink to="/methodology">Methodology</NavLink>
      <NavLink to="/report">View Report</NavLink>
    </LinksWrapper>
  </HeaderGrid>
);
