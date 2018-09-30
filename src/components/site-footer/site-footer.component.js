import React from "react";

import {
  FooterWrapper,
  Copyright,
  SponsorLogos
} from "./site-footer.styles";

export const SiteFooter = () => (
  <FooterWrapper>
    Out of pocket costs
    <p>
    <strong>DISCLAIMER:</strong> This tool does not predict the legal costs of a specific case. It is not customizable and does not account for complexity or variation in issues and costs. It frequently calculates the lowest typical costs. No information in this tool constitutes legal or financial advice.
    </p>
    <Copyright>
    <p>
      © Copyright 2018 CALIBRATE Solutions Inc.
    </p>
    <p>
      Supported by the Law Foundation of Ontario&#39;s Access to Justice Fund
    </p>
    </Copyright>
    <SponsorLogos>

    </SponsorLogos>
  </FooterWrapper>
);
