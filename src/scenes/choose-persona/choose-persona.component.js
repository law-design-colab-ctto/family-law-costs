import React from "react";
import PropTypes from "prop-types";

import { colours } from "src/styles";
import { SiteFooter } from "src/components";
import {
  DescriptiveSection,
  MissionHeader,
  ChoosePersonaMainSection,
  OutOfPocketHeader,
  OutOfPocketSubHeader,
  ToolDescription,
  FiltersSectionTitle,
  DescriptionSectionImages
} from "./choose-persona.styles";
import Grid from "@material-ui/core/Grid";
import {
  JOB_STABILITY_OPTIONS,
  STAGE_OPTIONS,
  FILTER_TYPES
} from "./store/choose-persona.constants";
import { FilterSet, SiteHeader } from "src/components";
import { PlaceholderImage } from "src/assets/icons";
import { PersonaResults } from "./components/persona-results.component";

export const ChoosePersonaComponent = props => {
  const { setFilter, clearFilter, jobStabilityFilter, stageFilter } = props;
  return (
    <Grid container direction="column">
      <SiteHeader />
      <DescriptiveSection item xs={12}>
        <MissionHeader>Our mission</MissionHeader>
        <div>
          Its difficult to make changes to court processes or services without
          an understanding of the costs to people in the family system. This
          site tries to facilitate that understanding.
        </div>
        <DescriptionSectionImages>
          <PlaceholderImage fontSize="inherit" />
          <PlaceholderImage fontSize="inherit" />
          <PlaceholderImage fontSize="inherit" />
        </DescriptionSectionImages>
      </DescriptiveSection>
      <ChoosePersonaMainSection item xs={12} container spacing={16}>
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
      </ChoosePersonaMainSection>
      <ChoosePersonaMainSection colour={colours.grayMediumLight} item xs={12}>
        <OutOfPocketSubHeader>
          See family law impacts on a variety of litigants. Let us pick one, or
          get choices below:
        </OutOfPocketSubHeader>
        <FiltersSectionTitle>Filter by:</FiltersSectionTitle>
        <Grid xs={12} container spacing={40} item>
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <FilterSet
              label="Stage"
              options={STAGE_OPTIONS}
              setFilter={setFilter}
              currentFilterValue={stageFilter}
              clearFilter={() =>
                clearFilter({ filterType: FILTER_TYPES.STAGE })
              }
              styleColor="violet"
            />
          </Grid>
        </Grid>
      </ChoosePersonaMainSection>

      <ChoosePersonaMainSection item xs={12}>
        <PersonaResults {...props} />
      </ChoosePersonaMainSection>
      <SiteFooter />
    </Grid>
  );
};

ChoosePersonaComponent.propTypes = {
  setFilter: PropTypes.func.isRequired,
  stageFilter: PropTypes.string,
  jobStabilityFilter: PropTypes.string,
  personasToDisplay: PropTypes.array,
  clearFilter: PropTypes.func,
  clearAllFilters: PropTypes.func
};
