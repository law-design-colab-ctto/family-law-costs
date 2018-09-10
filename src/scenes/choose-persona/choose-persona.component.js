import React from "react";
import PropTypes from "prop-types";
import { length, pipe, equals, isNil, isEmpty } from "ramda";
import Grow from "@material-ui/core/Grow";

import { colours } from "src/styles";
import { SiteFooter, PersonaCardDark } from "src/components";
import {
  ControlLabel,
  ClearIcon
} from "src/components/filter-set/filter-set.styles";
import {
  PersonaCardsContainerDiv,
  DescriptiveSection,
  MissionHeader,
  ChoosePersonaMainSection,
  OutOfPocketHeader,
  OutOfPocketSubHeader,
  PersonasHeader,
  ToolDescription,
  InlineTextLinkSpan,
  NoPersonasTextSpan,
  FiltersSectionTitle,
  DescriptionSectionImages,
  FilterControlWrapper,
  StressSliderWrapper,
  StressSliderLabels,
  StressFilterButton,
  ClearAllLabel
} from "./choose-persona.styles";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import Slider from "@material-ui/lab/Slider";
import {
  JOB_STABILITY_OPTIONS,
  STAGE_OPTIONS,
  FILTER_TYPES,
  FILTER_VALUES
} from "./store/choose-persona.constants";
import { FilterSet, SiteHeader } from "src/components";
import { PlaceholderImage } from "src/assets/icons";

const noneToDisplay = pipe(
  length,
  equals(0)
);
export const ChoosePersonaComponent = ({
  setFilter,
  clearFilter,
  clearAllFilters,
  jobStabilityFilter,
  stageFilter,
  stressCapacityFilter,
  personasToDisplay,
  dependentsFilter
}) => (
  <Grid container direction="column">
    <SiteHeader />
    <DescriptiveSection item xs={12}>
      <MissionHeader>Our mission</MissionHeader>
      <div>
        Its difficult to make changes to court processes or services without an
        understanding of the costs to people in the family system. This site
        tries to facilitate that understanding.
      </div>
      <DescriptionSectionImages>
        <PlaceholderImage fontSize="inherit" />
        <PlaceholderImage fontSize="inherit" />
        <PlaceholderImage fontSize="inherit" />
      </DescriptionSectionImages>
    </DescriptiveSection>
    <ChoosePersonaMainSection>
      <Grid item xs={12} container spacing={16}>
        <Grid item sm={4} xs={12}>
          <OutOfPocketHeader>
            Out of Pocket Costs in Family Law
          </OutOfPocketHeader>
        </Grid>
        <Grid item sm={8} xs={12}>
          <ToolDescription>
            <p>
              This tool calculates and compares typical costs including the
              money people spend during their legal dispute and the money they
              lose through missed work.
            </p>
            <p>
              This tool can help individuals, government, media, and researchers
              to understand the implications of family law.
            </p>
          </ToolDescription>
        </Grid>
        <Grid item sm={4} xs={12}>
          <OutOfPocketHeader>Methodology</OutOfPocketHeader>
        </Grid>
        <Grid item sm={8} xs={12}>
          <ToolDescription>
            <p>
              The calculations included in this tool are based on research of
              litigants about their experiences in family law disputes, as well
              as statistics from across the country.
            </p>
          </ToolDescription>
        </Grid>
      </Grid>
    </ChoosePersonaMainSection>
    <ChoosePersonaMainSection colour={colours.grayMediumLight}>
      <Grid item xs={12}>
        <OutOfPocketSubHeader>
          See family law impacts on a variety of litigants. Let us pick one, or
          get choices below:
        </OutOfPocketSubHeader>
        <FiltersSectionTitle>Filter by:</FiltersSectionTitle>
      </Grid>
      <Grid container xs={12} spacing={40} item>
        <Grid
          container
          direction="column"
          alignItems="center"
          item
          sm={6}
          xs={12}
        >
          <FilterSet
            label="Job Stability"
            options={JOB_STABILITY_OPTIONS}
            setFilter={setFilter}
            currentFilterValue={jobStabilityFilter}
            clearFilter={() =>
              clearFilter({ filterType: FILTER_TYPES.JOB_STABILITY })
            }
            styleColor="gray"
          />
          <FilterSet
            label="Stage"
            options={STAGE_OPTIONS}
            setFilter={setFilter}
            currentFilterValue={stageFilter}
            clearFilter={() => clearFilter({ filterType: FILTER_TYPES.STAGE })}
            styleColor="violet"
          />
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          item
          sm={6}
          xs={12}
        >
          <FilterControlWrapper>
            <ControlLabel>
              Dependents{" "}
              {!isEmpty(dependentsFilter) && (
                <ClearIcon
                  nativeColor={colours.grayDark}
                  onClick={() =>
                    clearFilter({ filterType: FILTER_TYPES.DEPENDENTS })
                  }
                />
              )}
            </ControlLabel>
            <Select
              native
              defaultValue=""
              value={dependentsFilter}
              onChange={e =>
                setFilter({
                  filterType: FILTER_TYPES.DEPENDENTS,
                  filterValue: e.target.value
                })
              }
              inputProps={{
                name: "dependents",
                id: "dependents-input"
              }}
            >
              <option value="" disabled>
                Choose one
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </FilterControlWrapper>
          <FilterControlWrapper>
            <ControlLabel>
              Ability to handle stress
              {!isNil(stressCapacityFilter) && (
                <ClearIcon
                  nativeColor={colours.grayDark}
                  onClick={() =>
                    clearFilter({ filterType: FILTER_TYPES.STRESS_CAPACITY })
                  }
                />
              )}
            </ControlLabel>
            <StressSliderWrapper>
              <StressSliderLabels>
                <StressFilterButton
                  onClick={() =>
                    setFilter({
                      filterType: FILTER_TYPES.STRESS_CAPACITY,
                      filterValue: FILTER_VALUES.LOW
                    })
                  }
                >
                  Low
                </StressFilterButton>
                <StressFilterButton
                  onClick={() =>
                    setFilter({
                      filterType: FILTER_TYPES.STRESS_CAPACITY,
                      filterValue: FILTER_VALUES.MEDIUM
                    })
                  }
                >
                  Medium
                </StressFilterButton>
                <StressFilterButton
                  onClick={() =>
                    setFilter({
                      filterType: FILTER_TYPES.STRESS_CAPACITY,
                      filterValue: FILTER_VALUES.HIGH
                    })
                  }
                >
                  High
                </StressFilterButton>
              </StressSliderLabels>

              <Grow in={!isNil(stressCapacityFilter)}>
                <Slider
                  value={stressCapacityFilter}
                  min={FILTER_VALUES.LOW}
                  max={FILTER_VALUES.HIGH}
                  step={FILTER_VALUES.MEDIUM}
                  onChange={(e, val) =>
                    setFilter({
                      filterType: FILTER_TYPES.STRESS_CAPACITY,
                      filterValue: val
                    })
                  }
                  classes={{
                    root: "stress-slider",
                    track: "track",
                    trackBefore: "trackBefore",
                    trackAfter: "trackAfter",
                    thumb: "thumb"
                  }}
                />
              </Grow>
            </StressSliderWrapper>
          </FilterControlWrapper>
        </Grid>
      </Grid>
    </ChoosePersonaMainSection>

    <ChoosePersonaMainSection>
      <PersonasHeader>
        PERSONAS
        {(jobStabilityFilter ||
          stageFilter ||
          !isNil(stressCapacityFilter) ||
          dependentsFilter) && (
          <ClearAllLabel onClick={clearAllFilters}>
            Clear all filters
          </ClearAllLabel>
        )}
      </PersonasHeader>

      <PersonaCardsContainerDiv>
        {noneToDisplay(personasToDisplay) ? (
          <NoPersonasTextSpan>
            {`Sorry, no personas match these criteria. `}
            <InlineTextLinkSpan onClick={clearAllFilters}>
              {`See all personas.`}
            </InlineTextLinkSpan>
          </NoPersonasTextSpan>
        ) : (
          personasToDisplay.map(persona => (
            <PersonaCardDark key={persona.name} persona={persona} />
          ))
        )}
      </PersonaCardsContainerDiv>
    </ChoosePersonaMainSection>
    <SiteFooter />
  </Grid>
);

ChoosePersonaComponent.propTypes = {
  setFilter: PropTypes.func.isRequired,
  stageFilter: PropTypes.string,
  jobStabilityFilter: PropTypes.string,
  stressCapacityFilter: PropTypes.number,
  personasToDisplay: PropTypes.array,
  clearFilter: PropTypes.func,
  clearAllFilters: PropTypes.func,
  dependentsFilter: PropTypes.string
};
