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
  PersonaTextBold,
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
          <SectionHeader textColour={colours.black}>
            Impact on Stability
          </SectionHeader>
          <PersonaTextBold
          >{`Legal processes affect people's health, employment, housing, and relationships, 
          and can mean increased medical costs, risk of job loss or bankruptcy. Impact on stability 
          recognizes how the non-monetary impacts of the court process vary depending on someone's 
          circumstances and finances.`}</PersonaTextBold>
        </PersonaSection>
        <PersonaSection colour={colours.periwinkleBlueDark}>
          <QuoteBlock>
            <PersonaTextRegular>
              <em>{`"${persona.stressText1}"`}</em>
            </PersonaTextRegular>
            <PersonaTextRegular>
              <em>{`"${persona.stressText2}"`}</em>
            </PersonaTextRegular>
          </QuoteBlock>
        </PersonaSection>
        <PersonaSection colour={colours.white}>
          <SectionHeader>What if</SectionHeader>
          <PersonaTextRegular>
            {`The costs and timing of a family law process can vary dramatically 
            depending on how much conflict there is between partners. The legal costs 
            in this scenario are based on a relatively low level of conflict. The legal 
            costs can escalate quickly. Longer court processes also take a toll on 
            people's well-being, increasing their health costs and other financial expenses.`}
          </PersonaTextRegular>
          <PersonaTextRegular>
            {`Mediation is a way to resolve some or all of the issues earlier, with less 
            conflict. Mediation can also be used at different points throughout the process, 
            narrowing the issues and simplifying the court process. However, mediation 
            is not an appropriate option for every situation. Some disputes cannot be mediated.`}
          </PersonaTextRegular>
          <PersonaTextRegular>
            {`This chart demonstrates what might happen to the costs if this scenario was 
            resolved early through mediation or if it escalated due to increasing conflict.`}
          </PersonaTextRegular>
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
