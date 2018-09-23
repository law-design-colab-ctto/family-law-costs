import React from "react";
import PropTypes from "prop-types";
import { toLower } from "ramda";
import Grid from "@material-ui/core/Grid";

import {
  SiteHeader,
  PersonaCard,
  PersonaSection,
  SiteFooter,
  CostsIncomeWithBars
} from "src/components";
import { colours } from "src/styles";

import {
  PersonaTextRegular,
  SectionHeader,
  SectionBlock,
  SectionDivider,
  QuoteBlock
} from "./persona-page.styles";
import { PersonaChoices } from "./components/persona-choices.component";
import { CostsSummaryDisplay } from "./components/costs-summary-display.component";
import { LegalCosts } from "./components/legal-costs.component";
import { TransportationCosts } from "./components/transportation-costs.component";
import { DaysOffWork } from "./components/days-off-work.component";
import { TotalLostIncome } from "./components/total-lost-income.component";
import { ChildcareCosts } from "./components/childcare-costs.component";
import { MovingCosts } from "./components/moving-costs.component";
import { ImpactOnStability } from "./components/impact-on-stability.component";
import { Stress } from "./components/stress.component";
import { Conflict } from "./components/conflict.component";

export class PersonaPageComponent extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { personaName }
      },
      personasByName,
      setIncome
    } = this.props;
    const persona = personasByName[toLower(personaName)];
    setIncome({ income: persona.income });
  }
  render() {
    const {
      match: {
        params: { personaName }
      },
      personasByName,
      incomeDisplay
    } = this.props;
    const persona = personasByName[toLower(personaName)];
    return (
      <Grid container>
        <SiteHeader />
        <PersonaSection colours={colours.white}>
          <SectionBlock>
            <PersonaCard persona={persona} quote={persona.quote1} />
          </SectionBlock>
          <PersonaTextRegular>{persona.intro}</PersonaTextRegular>
        </PersonaSection>
        <PersonaSection colour={colours.periwinkleBlueLighter}>
          <PersonaChoices persona={persona} {...this.props} />
        </PersonaSection>
        <PersonaSection colour={colours.periwinkleBlueDark}>
          <CostsSummaryDisplay persona={persona} {...this.props} />
        </PersonaSection>
        <PersonaSection colour={colours.periwinkleBlueLighter}>
          <SectionHeader colour={colours.periwinkleBlue}>
            Costs of the Case
          </SectionHeader>
          <SectionBlock>
            <LegalCosts persona={persona} {...this.props} />
          </SectionBlock>
          <SectionDivider />
          <SectionBlock>
            <TransportationCosts {...this.props} />
          </SectionBlock>
        </PersonaSection>
        <PersonaSection colour={colours.white}>
          <SectionHeader colour={colours.periwinkleBlue}>
            Other Financial Impacts
          </SectionHeader>
          <SectionBlock>
            <QuoteBlock>
              <PersonaTextRegular>
                <em>{`"${persona.timeCostText}"`}</em>
              </PersonaTextRegular>
              <PersonaTextRegular>
                <em>{`"${persona.daysOffWorkText}"`}</em>
              </PersonaTextRegular>
            </QuoteBlock>
          </SectionBlock>

          <SectionBlock>
            <DaysOffWork persona={persona} {...this.props} />
          </SectionBlock>

          <SectionBlock>
            <TotalLostIncome persona={persona} {...this.props} />
          </SectionBlock>
          <SectionDivider />

          <SectionBlock>
            <ChildcareCosts persona={persona} {...this.props} />
          </SectionBlock>
          <SectionDivider />

          <SectionBlock>
            <MovingCosts persona={persona} {...this.props} />
          </SectionBlock>
          <CostsIncomeWithBars
            totalDirectCosts={"$100000"}
            income={incomeDisplay}
          />
        </PersonaSection>
        <PersonaSection colour={colours.periwinkleBlueLighter}>
          <ImpactOnStability />
        </PersonaSection>
        <PersonaSection colour={colours.periwinkleBlueDark}>
          <Stress persona={persona} />
        </PersonaSection>
        <PersonaSection colour={colours.white}>
          <Conflict />
        </PersonaSection>
        <SiteFooter />
      </Grid>
    );
  }
}

PersonaPageComponent.propTypes = {
  match: PropTypes.any,
  personasByName: PropTypes.any,
  setIncome: PropTypes.func,
  income: PropTypes.number,
  incomeDisplay: PropTypes.string,
  setProvince: PropTypes.func,
  setLawyer: PropTypes.func,
  hasLawyer: PropTypes.bool,
  isEligibleForLegalAid: PropTypes.bool,
  legalFeesDisplay: PropTypes.string,
  locationType: PropTypes.string,
  setLocationType: PropTypes.func,
  transportationFees: PropTypes.string,
  legalFees: PropTypes.string,
  childcareFees: PropTypes.string,
  movingFees: PropTypes.string,
  totalDirectFees: PropTypes.string,
  eligibilityReasons: PropTypes.arrayOf(PropTypes.string)
};
