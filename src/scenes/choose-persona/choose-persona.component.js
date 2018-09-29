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
} from "./choose-persona.styles";
import Grid from "@material-ui/core/Grid";
import {
  JOB_STABILITY_OPTIONS,
  STAGE_OPTIONS,
  FILTER_TYPES
} from "./store/choose-persona.constants";
import { FilterSet, SiteHeader } from "src/components";
import { PersonaResults } from "./components/persona-results.component";

export const ChoosePersonaComponent = props => {
  const { setFilter, clearFilter, jobStabilityFilter, stageFilter } = props;
  return (
    <Grid container direction="column">
      <SiteHeader />
      <DescriptiveSection item xs={12}>
        <MissionHeader>Explore the costs of family law disputes in Canada</MissionHeader>
      </DescriptiveSection>
      <ChoosePersonaMainSection item xs={12} container spacing={16}>
        <Grid item sm={4} xs={12}>
          <OutOfPocketHeader>
            Out-of-Pocket: The Costs of Family Law
          </OutOfPocketHeader>
        </Grid>
        <Grid item sm={8} xs={12}>
          <ToolDescription>
            <p>
              It is hard to calculate the real cost of a family law dispute in Canada. Without this information, It is hard for individuals, lawyers, governments and courts to understand the impact and to improve the system.
            </p>
            <p>
            The Out-of-Pocket tool helps to put a dollar figure on the out-of-pocket costs to individuals and families during a family law dispute.
            </p>
            <p>
              This tool uses typical stories and experiences to provide snapshots of family law costs.
            </p>
            <p>
              To learn more, click on one of the stories below or use the filters to find stories about specific experiences.
            </p>
          </ToolDescription>
        </Grid>
      </ChoosePersonaMainSection>
      <ChoosePersonaMainSection colour={colours.grayMediumLight} item xs={12}>
        <OutOfPocketSubHeader>
          To learn more, click on one of the stories below or use the filters to find stories about specific experiences.
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
              label="Stage of the Court Proceeding"
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
