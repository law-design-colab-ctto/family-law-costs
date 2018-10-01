import React from "react";
import PropTypes from "prop-types";
import { toLower } from "ramda";
import Grid from "@material-ui/core/Grid";
import { numberToMoneyDisplay } from "./store/persona-page.utils";

import {
  SiteHeader,
  PersonaCardHorizontal,
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
import { isEmpty } from "ramda";

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
  componentWillUnmount() {
    const { resetChoices } = this.props;
    resetChoices();
  }
  render() {
    const {
      match: {
        params: { personaName }
      },
      personasByName,
      movingFees,
      childcareFees,
      incomeDisplay,
      totalLostIncome,
      legalFees,
      transportationFees
    } = this.props;
    const persona = personasByName[toLower(personaName)];
    return (
      <Grid container>
        <SiteHeader />
        <PersonaSection colours={colours.white}>
          <SectionBlock>
            <PersonaCardHorizontal persona={persona} quote={persona.quote1} />
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
          <SectionHeader colour={colours.periwinkleBlue} id="costs-of-the-case">
            Costs of the Case
          </SectionHeader>
          <SectionBlock>
            <LegalCosts persona={persona} {...this.props} />
          </SectionBlock>
          <SectionDivider />
          <SectionBlock>
            <TransportationCosts {...this.props} />
          </SectionBlock>
          <SectionDivider />
          <br /><strong><center>Total Costs of The Case</center></strong>
          <CostsIncomeWithBars
            persona={persona}
            topMoney={numberToMoneyDisplay(
                parseInt(legalFees.replace(/[,$]/g, ""), 10) +
                parseInt(transportationFees.replace(/[,$]/g, ""), 10)
              )}
            income={incomeDisplay}
          />

        </PersonaSection>
        <PersonaSection colour={colours.white}>
          <SectionHeader
            colour={colours.periwinkleBlue}
            id="other-financial-impacts"
          >
            Other Financial Impacts
          </SectionHeader>
          <SectionBlock>
            <QuoteBlock>
              <PersonaTextRegular>
                <em>{`"${persona.timeCostText}"`}</em>
              </PersonaTextRegular>
            </QuoteBlock>
          </SectionBlock>

          <SectionBlock>
            <DaysOffWork persona={persona} {...this.props} />
          </SectionBlock>

          <SectionBlock>
            <TotalLostIncome persona={persona} {...this.props} />
          </SectionBlock>

          {!isEmpty(childcareFees) && (
            <React.Fragment>
              <SectionDivider />
              <SectionBlock>
                <ChildcareCosts persona={persona} {...this.props} />
              </SectionBlock>
            </React.Fragment>
          )}

          {!isEmpty(movingFees) && (
            <React.Fragment>
              <SectionDivider />
              <SectionBlock>
                <MovingCosts persona={persona} {...this.props} />
              </SectionBlock>
            </React.Fragment>
          )}

          <SectionDivider />
          <br /><strong><center>Other Financial Impacts</center></strong>

          <CostsIncomeWithBars
            originalCost={numberToMoneyDisplay(
                parseInt(legalFees.replace(/[,$]/g, ""), 10) +
                parseInt(transportationFees.replace(/[,$]/g, ""), 10)
              )}
            topMoney={numberToMoneyDisplay(
                parseInt(totalLostIncome.replace(/[,$]/g, ""), 10) +
                (!isEmpty(childcareFees) ?
                parseInt(childcareFees.replace(/[,$]/g, ""), 10) : 0) +
                (!isEmpty(movingFees) ?
                parseInt(movingFees.replace(/[,$]/g, ""), 10) : 0)
              )}
            income={incomeDisplay}
          />


        </PersonaSection>
        <PersonaSection colour={colours.periwinkleBlueLighter}>
          <ImpactOnStability persona={persona} />
        </PersonaSection>
        <PersonaSection colour={colours.periwinkleBlueDark}>
          <Stress persona={persona} />
        </PersonaSection>
        <PersonaSection colour={colours.white}>
          <Conflict persona={persona} {...this.props} />
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
  eligibilityReasons: PropTypes.arrayOf(PropTypes.string),
  resetChoices: PropTypes.func,
  otherFinancialImpacts: PropTypes.string,
  totalLostIncome: PropTypes.string,
  impactOnStability: PropTypes.string
};
