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
  SectionSubheader,
  SectionBlock,
  CenteredContent,
  Subsection,
  Label,
  CostDisplay,
  TotalCostsWrapper,
  DisplayItemsWrapper,
  SectionDivider,
  LargeCostDisplay,
  OutlinedDisplayCard,
  HighlightedNote
} from "./persona-page.styles";
import { PersonaChoices } from "./components/persona-choices.component";
import { capitalize } from "src/utils";
import { CostsSummaryDisplay } from "./components/costs-summary-display.component";
import { LegalCosts } from "./components/legal-costs.component";

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
      incomeDisplay,
      transportationFees,
      movingFees,
      childcareFees,
      totalDirectFees
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
            <SectionSubheader>Transportation Costs</SectionSubheader>
            <PersonaTextRegular>
              {`Includes travel to and from court.`}
            </PersonaTextRegular>
            <TotalCostsWrapper>
              <Label>Total Transportation Costs</Label>
              <CostDisplay>{transportationFees}</CostDisplay>
            </TotalCostsWrapper>
          </SectionBlock>
          <SectionDivider />
          <SectionBlock>
            <SectionSubheader>Moving Costs</SectionSubheader>
            <PersonaTextRegular>{persona.movingCostText}</PersonaTextRegular>
            <TotalCostsWrapper>
              <Label>Total Transportation Costs</Label>
              <CostDisplay>{movingFees}</CostDisplay>
            </TotalCostsWrapper>
          </SectionBlock>
          <SectionDivider />
          <SectionBlock>
            <SectionSubheader>Childcare Costs</SectionSubheader>
            <PersonaTextRegular>{persona.childcareCostText}</PersonaTextRegular>
            <TotalCostsWrapper>
              <Label>Total Childcare Costs</Label>
              <CostDisplay>{childcareFees}</CostDisplay>
            </TotalCostsWrapper>
          </SectionBlock>
          <SectionDivider />
          <SectionBlock>
            <PersonaTextRegular>
              {`In adition to other living expenses such as rent, food, internet, etc. these all contribute to the total direct costs.`}
            </PersonaTextRegular>
            <TotalCostsWrapper>
              <Label>Total Direct Costs</Label>
              <LargeCostDisplay>{totalDirectFees}</LargeCostDisplay>
            </TotalCostsWrapper>
          </SectionBlock>
        </PersonaSection>
        <PersonaSection colour={colours.white}>
          <SectionHeader>Time</SectionHeader>
          <PersonaTextRegular>{persona.timeCostText}</PersonaTextRegular>
          <PersonaTextRegular>{persona.daysOffWorkText}</PersonaTextRegular>
          <SectionBlock>
            <SectionSubheader>Days off work</SectionSubheader>
            <DisplayItemsWrapper>
              <OutlinedDisplayCard>
                <Label>Prep days and court events</Label>
                <CenteredContent>
                  <PersonaTextBold>5 days</PersonaTextBold>
                </CenteredContent>
              </OutlinedDisplayCard>
              <OutlinedDisplayCard>
                <Label>Sick days</Label>
                <CenteredContent>
                  <PersonaTextBold>5 days</PersonaTextBold>
                </CenteredContent>
              </OutlinedDisplayCard>
              <OutlinedDisplayCard>
                <Label>Total days</Label>
                <CenteredContent>
                  <PersonaTextBold>10 days</PersonaTextBold>
                </CenteredContent>
              </OutlinedDisplayCard>
            </DisplayItemsWrapper>
          </SectionBlock>
          <SectionBlock>
            <SectionSubheader>Time has a cost</SectionSubheader>
            <PersonaTextRegular>
              {`Every time I take a day off, I lose income and also need to pay for childcare.`}
            </PersonaTextRegular>
            <SectionBlock>
              <TotalCostsWrapper>
                <Label>Total Lost Income</Label>
                <CostDisplay>{totalDirectFees}</CostDisplay>
              </TotalCostsWrapper>
            </SectionBlock>
          </SectionBlock>
        </PersonaSection>
        <PersonaSection colour={colours.grayLight}>
          <SectionHeader>Wellness</SectionHeader>
          <PersonaTextRegular>{persona.stressText1}</PersonaTextRegular>
          <PersonaTextRegular>{persona.stressText2}</PersonaTextRegular>
          <PersonaTextRegular>{persona.stressText3}</PersonaTextRegular>
        </PersonaSection>
        <PersonaSection colour={colours.white}>
          <SectionHeader>Summary</SectionHeader>
          <Subsection>
            <SectionSubheader>Finances</SectionSubheader>
            <PersonaTextRegular>
              {`Overall, ${capitalize(
                persona.name
              )}’s financial costs are X % of her annual income. If her living expenses are X% of her income, then`}
            </PersonaTextRegular>
            <PersonaTextBold>
              <div>{`This year she will be $ in debt.`}</div>
              <div>{`This year her net income is $.`}</div>
            </PersonaTextBold>
          </Subsection>
          <SectionDivider colour={colours.grayDark} />
          <SectionBlock>
            <SectionSubheader>What if</SectionSubheader>
            <PersonaTextRegular>
              {`The level of conflict between ex-partners can exponentially increase or decrease the costs of the proceedings.`}
            </PersonaTextRegular>
            <PersonaTextRegular>
              {`${
                persona.conflictText
              } If they had chosen mediation, their costs would have been substantially less. If there was a higher level of conflict between them, and they fought over every issue, their costs would have been exponentially more.`}
            </PersonaTextRegular>
            <HighlightedNote>
              <CenteredContent>
                Note: Mediation is not an appropriate option for everyone. Some
                disputes cannot be mediated.
              </CenteredContent>
            </HighlightedNote>
          </SectionBlock>
          <SectionDivider colour={colours.grayDark} />
          <SectionBlock>
            <SectionSubheader>Other</SectionSubheader>
            <PersonaTextRegular>
              {`The separation and divorce process can be very stressful for many people and can impact their emotional and mental health. It is important for parties who are struggling to ensure that they are utilizing support services they have access to.`}
            </PersonaTextRegular>
            <PersonaTextRegular>
              {`${capitalize(
                persona.name
              )} prioritized her health by taking advantage of her flexible work hours and taking time off when required; however, she lacked emotional support from friends and family and did not have healthy coping mechanisms (her compulsive behaviour and impulsive spending). Without intervention, her situation (financial and emotional) could further deteriorate and have devastating consequences.`}
            </PersonaTextRegular>
          </SectionBlock>
        </PersonaSection>
        <PersonaSection colour={colours.grayLight}>
          <CostsIncomeWithBars
            totalDirectCosts={"$100000"}
            income={incomeDisplay}
          />
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
