import React from "react";

import { SectionHeader, PersonaTextBold } from "../persona-page.styles";
import { colours } from "src/styles";

export const ImpactOnStability = () => (
  <React.Fragment>
    <SectionHeader textColour={colours.black}>
      Impact on Stability
    </SectionHeader>
    <PersonaTextBold
    >{`Legal processes affect people's health, employment, housing, and relationships, 
      and can mean increased medical costs, risk of job loss or bankruptcy. Impact on stability 
      recognizes how the non-monetary impacts of the court process vary depending on someone's 
      circumstances and finances.`}</PersonaTextBold>
  </React.Fragment>
);

ImpactOnStability.propTypes = {};
