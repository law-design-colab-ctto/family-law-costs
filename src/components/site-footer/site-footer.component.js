import React from "react";

import {
  FooterWrapper,
  Copyright,
  SponsorLogos,
  LogoRowsWrapper,
  ColumnWrapper,
  LogoLink,
  LFOLogoLink
} from "./site-footer.styles";

export const SiteFooter = () => (
  <FooterWrapper>
    <LogoRowsWrapper>
      <ColumnWrapper>
        <div>Out-of-Pocket was created by</div>
        <SponsorLogos>
          <LogoLink imageName="uvicacelogo" href="http://www.uvicace.com/" />
          <LogoLink imageName="calibratelogo" href="http://www.calibratesolutions.ca/" />
        </SponsorLogos>
      </ColumnWrapper>
      <ColumnWrapper>
        <div>
          Supported by the Law Foundation <br />
          of Ontario&#39;s Access to Justice Fund
        </div>
        <SponsorLogos>
          <LFOLogoLink href="http://www.lawfoundation.on.ca/" imageName="lawfoundationlogo" />
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
