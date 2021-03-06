import React from "react";
import PropTypes from "prop-types";
import { toLower } from "ramda";
import Grid from "@material-ui/core/Grid";

import {
  SiteHeader,
  PersonaCardHorizontal,
  PersonaSection,
  SiteFooter
} from "src/components";
import { CostsIncomeGraph } from "src/components/costs-income-graph";
import { colours } from "src/styles";
import { numberToMoneyDisplay } from "./store/persona-page.utils";

import {
  PersonaTextRegular,
  SectionHeader,
  SectionBlock,
  SectionDivider,
  QuoteBlock,
  CenteredContent,
  LargeCostDisplay
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
import { SeeMorePersonas } from "./components/see-more-personas.component";

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
      movingFeesDisplay,
      childcareFeesDisplay,
      income,
      totalLostIncome,
      legalFees,
      transportationFees,
      childcareFees,
      movingFees
    } = this.props;
    const persona = personasByName[toLower(personaName)];
    console.log(childcareFees);
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

          <strong>
            <center>Total Costs of The Case</center>
          </strong>
          <CenteredContent>
            <LargeCostDisplay>
              {numberToMoneyDisplay(legalFees + transportationFees)}
            </LargeCostDisplay>
          </CenteredContent>
          <CostsIncomeGraph
            income={income}
            id="cost-income-1"
            costs={[
              {
                label: "Costs of the case",
                value: legalFees + transportationFees
              }
            ]}
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

          {!isEmpty(childcareFeesDisplay) && (
            <React.Fragment>
              <SectionDivider />
              <SectionBlock>
                <ChildcareCosts persona={persona} {...this.props} />
              </SectionBlock>
            </React.Fragment>
          )}

          {!isEmpty(movingFeesDisplay) && (
            <React.Fragment>
              <SectionDivider />
              <SectionBlock>
                <MovingCosts persona={persona} {...this.props} />
              </SectionBlock>
            </React.Fragment>
          )}

          <SectionDivider />
          <br />
          <strong>
            <center>Other Financial Impacts</center>
          </strong>

          <CenteredContent>
            <LargeCostDisplay>
              {numberToMoneyDisplay(
                (totalLostIncome || 0) +
                  (childcareFees || 0) +
                  (movingFees || 0)
              )}
            </LargeCostDisplay>
          </CenteredContent>
          <CostsIncomeGraph
            income={income}
            id="cost-income-2"
            costs={[
              {
                label: "Costs of the case",
                value: legalFees + transportationFees
              },
              {
                label: "Other financial impacts",
                value:
                  (totalLostIncome || 0) +
                  (childcareFees || 0) +
                  (movingFees || 0)
              }
            ]}
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
          <CenteredContent>
            <SeeMorePersonas />
          </CenteredContent>
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
  transportationFees: PropTypes.number,
  legalFees: PropTypes.number,
  childcareFees: PropTypes.number,
  movingFees: PropTypes.number,
  totalDirectFees: PropTypes.string,
  eligibilityReasons: PropTypes.arrayOf(PropTypes.string),
  resetChoices: PropTypes.func,
  otherFinancialImpacts: PropTypes.string,
  totalLostIncome: PropTypes.number,
  impactOnStability: PropTypes.string,
  movingFeesDisplay: PropTypes.string,
  childcareFeesDisplay: PropTypes.string
};
