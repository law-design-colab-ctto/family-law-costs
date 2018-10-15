import React from "react";

import {
  FooterWrapper,
  Copyright,
  SponsorLogos,
  LogoRowsWrapper,
  ColumnWrapper,
  LogoDiv
} from "./site-footer.styles";

export const SiteFooter = () => (
  <FooterWrapper>
    <LogoRowsWrapper>
      <ColumnWrapper>
        <div>Out-of-Pocket</div>
        <SponsorLogos>
          <LogoDiv imageName="uvicacelogo" />
          <LogoDiv imageName="calibratelogo" />
        </SponsorLogos>
      </ColumnWrapper>
      <ColumnWrapper>
        <div>
          Supported by the Law Foundation <br />
          of Ontario&#39;s Access to Justice Fund
        </div>
        <SponsorLogos>
          <LogoDiv imageName="lawfoundationlogo" />
        </SponsorLogos>
      </ColumnWrapper>
    </LogoRowsWrapper>
    <Copyright>
      <p>© Copyright 2018 CALIBRATE Solutions Inc.</p>
    </Copyright>
    <p>
      <strong>DISCLAIMER:</strong> This tool does not predict the legal costs of
      a specific case. It is not customizable and does not account for
      complexity or variation in issues and costs. It frequently calculates the
      lowest typical costs. No information in this tool constitutes legal or
      financial advice.
    </p>
  </FooterWrapper>
);
