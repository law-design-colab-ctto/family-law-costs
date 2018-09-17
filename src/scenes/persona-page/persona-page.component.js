import React from "react";
import PropTypes from "prop-types";
import { toLower, equals } from "ramda";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/lab/Slider";
import Select from "@material-ui/core/Select";

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
  MoreDetailsButton,
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
  ButtonLabelWrapper,
  InformationNotice,
  InformationCard,
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
            <PersonaCard persona={persona} />
          </SectionBlock>
          <PersonaTextRegular>{persona.intro}</PersonaTextRegular>
          <PersonaTextBold>{`"${persona.quote1}"`}</PersonaTextBold>
          <CenteredContent>
            <MoreDetailsButton>{`See ${
              persona.name
            }'s story`}</MoreDetailsButton>
          </CenteredContent>
        </PersonaSection>
        <PersonaSection colour={colours.periwinkleBlueLighter}>
          <SectionHeader>Money</SectionHeader>
          <SectionBlock>
            <PersonaTextRegular>
              {`${persona.moneyStoryText} `}
              <strong>{incomeDisplay}</strong>
              {`.`}
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
            <DropdownControlWrapper>
              <div>I live in</div>
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
          </SectionBlock>
          <SectionDivider />
          <Subsection>
            <SectionSubheader>Legal Fees</SectionSubheader>
            <PersonaTextRegular>
              My friend recommended a lawyer, but I’m not sure I want to hire
              one. I’ve heard how expensive lawyers can be, but I’m not
              confident in my ability to represent myself.
            </PersonaTextRegular>
            <ButtonControlWrapper>
              <ButtonLabelWrapper>
                <strong>Should I hire a lawyer?</strong>
              </ButtonLabelWrapper>
              <ButtonSetWrapper>
                <ButtonOption
                  active={hasLawyer}
                  onClick={() => setLawyer({ hasLawyer: true })}
                >
                  Yes
                </ButtonOption>
                <ButtonOption
                  active={!hasLawyer}
                  onClick={() => setLawyer({ hasLawyer: false })}
                >
                  No
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
            <SectionBlock>
              <InformationCard>
                <SectionSmallSubheader>
                  <strong>Hiring a Lawyer</strong>
                </SectionSmallSubheader>
                <PersonaTextRegular>
                  {`Legal costs include lawyer's fee, professional fees (e.g.
                accountants), and court fees.`}
                </PersonaTextRegular>
                <TotalCostsWrapper>
                  <Label>Total Legal Fees</Label>
                  <CostDisplay>{legalFeesDisplay}</CostDisplay>
                </TotalCostsWrapper>
              </InformationCard>
            </SectionBlock>
          </Subsection>
          <SectionBlock>
            <SectionSubheader>Transportation Costs</SectionSubheader>
            <SectionBlock>
              <div>I live in a:</div>
              <DisplayItemsWrapper>
                <LabelledImageButton
                  active={equals(locationType, "city")}
                  onClick={() => setLocationType({ locationType: "city" })}
                >
                  <PlaceholderImage fontSize="inherit" />
                  <ImageButtonLabel>City</ImageButtonLabel>
                </LabelledImageButton>
                <LabelledImageButton
                  active={equals(locationType, "town")}
                  onClick={() => setLocationType({ locationType: "town" })}
                >
                  <PlaceholderImage fontSize="inherit" />
                  <ImageButtonLabel>Town</ImageButtonLabel>
                </LabelledImageButton>
                <LabelledImageButton
                  active={equals(locationType, "remote area")}
                  onClick={() =>
                    setLocationType({ locationType: "remote area" })
                  }
                >
                  <PlaceholderImage fontSize="inherit" />
                  <ImageButtonLabel>Remote Area</ImageButtonLabel>
                </LabelledImageButton>
              </DisplayItemsWrapper>
              <TotalCostsWrapper>
                <Label>Total Transportation Costs</Label>
                <CostDisplay>{legalFeesDisplay}</CostDisplay>
              </TotalCostsWrapper>
            </SectionBlock>
            <SectionDivider />
          </SectionBlock>
          <SectionBlock>
            <SectionSubheader>Moving Costs</SectionSubheader>
            <PersonaTextRegular>
              {`After Alice moved out last year, I couldn't afford the rent on my
              own anymore. I've had to move to a smaller place. It cost me $3633
              to move.`}
            </PersonaTextRegular>
            <TotalCostsWrapper>
              <Label>Total Transportation Costs</Label>
              <CostDisplay>{legalFeesDisplay}</CostDisplay>
            </TotalCostsWrapper>
          </SectionBlock>
          <SectionDivider />
          <SectionBlock>
            <SectionSubheader>Childcare Costs</SectionSubheader>
            <PersonaTextRegular>
              {`I have two children. Because I chose to hire a lawyer, I don't have to leave my kids with a babysitter as much.`}
            </PersonaTextRegular>
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
          <PersonaTextRegular>
            {`It’s been six months since we started the divorce proceedings.
            I’m thankful that I have a stable and flexible job, because I have been able to schedule day time appointments
            with my lawyer and attend court without too much trouble.`}
          </PersonaTextRegular>
          <PersonaTextRegular>
            {`Every time I have to go to court, I have to take a couple days
            off to prepare documents. The process is so stressful, that I often
            end up feeling sick to my stomach and have to take additional days off work to recover.`}
          </PersonaTextRegular>
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
          <PersonaTextRegular>
            {`The stress of everything has slowly been taking its toll on me. I feel like I’m not the fun parent anymore, because I spend my weekends and vacation days preparing court documents, instead of spending time with my kids.`}
          </PersonaTextRegular>
          <PersonaTextRegular>
            {`Alice and I have shared custody of the kids, but when my kids aren’t around I don’t feel grounded. Lately I’ve been stress shopping and making impulse purchases of large items.`}
          </PersonaTextRegular>
          <PersonaTextRegular>
            {`I’ve been dipping into my savings to pay for everything.`}
          </PersonaTextRegular>
        </PersonaSection>
        <PersonaSection colour={colours.white}>
          <SectionHeader>Summary</SectionHeader>
          <Subsection>
            <SectionSubheader>Finances</SectionSubheader>
            <PersonaTextRegular>
              {`Overall, Roberta’s financial costs are X % of her annual income.If her living expenses are X% of her income, then`}
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
              {`Roberta and Alice are on relatively civil terms. If they had chosen mediation, their costs would have been substantially less. If there was a higher level of conflict between them, and they fought over every issue, their costs would have been exponentially more.`}
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
              {`Roberta prioritized her health by taking advantage of her flexible work hours and taking time off when required; however, she lacked emotional support from friends and family and did not have healthy coping mechanisms (her compulsive behaviour and impulsive spending). Without intervention, her situation (financial and emotional) could further deteriorate and have devastating consequences.`}
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
