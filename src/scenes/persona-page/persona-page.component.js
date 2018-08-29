import React from "react";
import PropTypes from "prop-types";
import { toLower } from "ramda";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/lab/Slider";
import Select from "@material-ui/core/Select";

import { SiteHeader, PersonaCard, PersonaSection } from "src/components";
import { colours } from "src/styles";

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
  TotalCostsWrapper
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
      legalFeesDisplay
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
        <PersonaSection colour={colours.lighterIndigo}>
          <SectionHeader>Money</SectionHeader>
          <Subsection>
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
          </Subsection>
          <SectionSubheader>Legal Fees</SectionSubheader>
          <PersonaTextRegular>
            My friend recommended a lawyer, but I’m not sure I want to hire one.
            I’ve heard how expensive lawyers can be, but I’m not confident in my
            ability to represent myself.
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
              <SectionSmallSubheader>Hiring a Lawyer</SectionSmallSubheader>
              <TotalCostsWrapper>
                <Label>Total Legal Fees</Label>
                <CostDisplay>{legalFeesDisplay}</CostDisplay>
              </TotalCostsWrapper>
            </InformationCard>
          </SectionBlock>
        </PersonaSection>
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
  legalFeesDisplay: PropTypes.string
};
