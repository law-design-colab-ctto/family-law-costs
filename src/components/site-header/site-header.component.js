import React from "react";
import Grid from "@material-ui/core/Grid";

import { HeaderGrid } from "./site-header.styles";

export const SiteHeader = () => (
  <HeaderGrid item xs={12} container justify="space-between">
    <Grid item>Out-of-pocket costs</Grid>
    <Grid item>View report</Grid>
  </HeaderGrid>
);
