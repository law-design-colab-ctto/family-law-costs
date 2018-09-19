import React from "react";
import PropTypes from "prop-types";
import { toLower, equals, isNil } from "ramda";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/lab/Slider";
import Select from "@material-ui/core/Select";
import Collapse from "@material-ui/core/Collapse";

import {
  SiteHeader,
  PersonaCard,
  PersonaSection,
  SiteFooter,
  CostsIncomeWithBars
} from "src/components";
import { colours } from "src/styles";
import { PlaceholderImage } from "src/assets/icons";

import {
  PersonaTextBold,
  PersonaTextRegular,
  SectionHeader,
  SectionSubheader,
  SectionBlock,
  CenteredContent,
  ControlWrapper,
  SliderWrapper,
  DropdownWrapper,
  DropdownControlWrapper,
  Subsection,
  ButtonSetWrapper,
  ButtonOption,
  ButtonControlWrapper,
  InformationNotice,
  SectionSmallSubheader,
  Label,
  CostDisplay,
  TotalCostsWrapper,
  LabelledImageButton,
  ImageButtonLabel,
  DisplayItemsWrapper,
  SectionDivider,
  LargeCostDisplay,
  OutlinedDisplayCard,
  HighlightedNote
} from "./persona-page.styles";

const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

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
      income,
      incomeDisplay,
      hasLawyer,
      setIncome,
      setProvince,
      setLawyer,
      isEligibleForLegalAid,
      eligibilityReasons,
      legalFeesDisplay,
      locationType,
      setLocationType
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
          <SectionSubheader>{`Make choices for ${
            persona.displayName
          }`}</SectionSubheader>
          <SectionBlock>
            <DropdownControlWrapper>
              <div>{`${persona.displayName} lives in`}</div>
              <DropdownWrapper>
                <Select
                  native
                  value={"ontario"}
                  onChange={e => setProvince({ province: e.target.value })}
                  inputProps={{
                    name: "province",
                    id: "province-input"
                  }}
                >
                  <option value="ontario">Ontario</option>
                </Select>
              </DropdownWrapper>
            </DropdownControlWrapper>
            <SectionBlock>
              <div>{`${capitalize(
                persona.pronouns.subjective
              )} lives in a:`}</div>
              <DisplayItemsWrapper>
                <LabelledImageButton
                  active={equals(locationType, "urban")}
                  onClick={() => setLocationType({ locationType: "urban" })}
                >
                  <PlaceholderImage fontSize="inherit" />
                  <ImageButtonLabel>Urban Area</ImageButtonLabel>
                </LabelledImageButton>
                <LabelledImageButton
                  active={equals(locationType, "remote")}
                  onClick={() => setLocationType({ locationType: "remote" })}
                >
                  <PlaceholderImage fontSize="inherit" />
                  <ImageButtonLabel>Remote Area</ImageButtonLabel>
                </LabelledImageButton>
                <LabelledImageButton
                  active={equals(locationType, "rural")}
                  onClick={() => setLocationType({ locationType: "rural" })}
                >
                  <PlaceholderImage fontSize="inherit" />
                  <ImageButtonLabel>Rural Area</ImageButtonLabel>
                </LabelledImageButton>
              </DisplayItemsWrapper>
              <TotalCostsWrapper>
                <Collapse in={persona.transportationFees}>
                  <Label>Total Transportation Costs</Label>
                  <CostDisplay>{persona.transportationFees}</CostDisplay>
                </Collapse>
              </TotalCostsWrapper>
            </SectionBlock>
            <PersonaTextRegular>
              {`${persona.displayName} makes `}
              <strong>{incomeDisplay}</strong>
              {` a year.`}
            </PersonaTextRegular>
            <ControlWrapper>
              <div>
                <strong>Adjust Income</strong>
              </div>
              <SliderWrapper>
                <Slider
                  value={income}
                  min={0}
                  max={100000}
                  step={10000}
                  onChange={(e, val) => setIncome({ income: val })}
                />
              </SliderWrapper>
            </ControlWrapper>
            <SectionBlock>
              <SectionSmallSubheader>
                <strong>{`In this case ${
                  persona.pronouns.subjective
                } is represented by`}</strong>
              </SectionSmallSubheader>
            </SectionBlock>
            <ButtonControlWrapper>
              <ButtonSetWrapper>
                <ButtonOption
                  active={hasLawyer === true}
                  onClick={() => setLawyer({ hasLawyer: true })}
                >
                  Lawyer
                </ButtonOption>
                <ButtonOption
                  active={hasLawyer === false}
                  onClick={() => setLawyer({ hasLawyer: false })}
                >
                  Self
                </ButtonOption>
              </ButtonSetWrapper>
            </ButtonControlWrapper>
            <SectionBlock>
              <InformationNotice>
                {`${persona.displayName} is`}
                <strong>
                  {`${
                    isEligibleForLegalAid ? "" : " not"
                  } eligible for legal aid because:`}
                </strong>
                {eligibilityReasons.map(reason => (
                  <div key={reason}>- {reason}</div>
                ))}
              </InformationNotice>
            </SectionBlock>
          </SectionBlock>
          <SectionDivider />
          <SectionBlock>
            <SectionSubheader>Legal Fees</SectionSubheader>
            <PersonaTextRegular>
              {`Includes court fees, professional fees (e.g. accountants to help with financial disclosure), and lawyer fees (if ${
                persona.displayName
              } has a lawyer and is not eligible for legal aid)`}
            </PersonaTextRegular>
            {!isNil(hasLawyer) && (
              <SectionBlock>
                <TotalCostsWrapper>
                  <Label>Total Legal Fees</Label>
                  <CostDisplay>{legalFeesDisplay}</CostDisplay>
                </TotalCostsWrapper>
              </SectionBlock>
            )}
          </SectionBlock>
          <SectionDivider />

          <SectionBlock>
            <SectionSubheader>Transportation Costs</SectionSubheader>
            <PersonaTextRegular>
              {`Includes travel to and from court.`}
            </PersonaTextRegular>
            <TotalCostsWrapper>
              <Label>Total Transportation Costs</Label>
              <CostDisplay>{legalFeesDisplay}</CostDisplay>
            </TotalCostsWrapper>
          </SectionBlock>
          <SectionDivider />
          <SectionBlock>
            <SectionSubheader>Moving Costs</SectionSubheader>
            <PersonaTextRegular>{persona.movingCostText}</PersonaTextRegular>
            <TotalCostsWrapper>
              <Label>Total Transportation Costs</Label>
              <CostDisplay>{legalFeesDisplay}</CostDisplay>
            </TotalCostsWrapper>
          </SectionBlock>
          <SectionDivider />
          <SectionBlock>
            <SectionSubheader>Childcare Costs</SectionSubheader>
            <PersonaTextRegular>{persona.childcareCostText}</PersonaTextRegular>
            <TotalCostsWrapper>
              <Label>Total Childcare Costs</Label>
              <CostDisplay>{legalFeesDisplay}</CostDisplay>
            </TotalCostsWrapper>
          </SectionBlock>
          <SectionDivider />
          <SectionBlock>
            <PersonaTextRegular>
              {`In adition to other living expenses such as rent, food, internet, etc. these all contribute to the total direct costs.`}
            </PersonaTextRegular>
            <TotalCostsWrapper>
              <Label>Total Direct Costs</Label>
              <LargeCostDisplay>{legalFeesDisplay}</LargeCostDisplay>
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
                <CostDisplay>{legalFeesDisplay}</CostDisplay>
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
              {`Overall, ${
                persona.displayName
              }’s financial costs are X % of her annual income. If her living expenses are X% of her income, then`}
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
              {`${
                persona.displayName
              } prioritized her health by taking advantage of her flexible work hours and taking time off when required; however, she lacked emotional support from friends and family and did not have healthy coping mechanisms (her compulsive behaviour and impulsive spending). Without intervention, her situation (financial and emotional) could further deteriorate and have devastating consequences.`}
            </PersonaTextRegular>
          </SectionBlock>
        </PersonaSection>
        <PersonaSection colour={colours.grayLight}>
          <CostsIncomeWithBars
            totalDirectCosts={legalFeesDisplay}
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
  eligibilityReasons: PropTypes.Array,
  legalFeesDisplay: PropTypes.string,
  locationType: PropTypes.string,
  setLocationType: PropTypes.func
};
