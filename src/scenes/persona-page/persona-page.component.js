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
  Subsection
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
      setIncome,
      setProvince
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
  setProvince: PropTypes.func
};
