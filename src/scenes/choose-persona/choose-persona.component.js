import React from "react";
import PropTypes from "prop-types";
import { length, pipe, equals } from "ramda";
import {
  PersonaCardsContainerDiv,
  DescriptiveSection,
  MissionHeader,
  ChoosePersonaMainSection,
  OutOfPocketHeader,
  OutOfPocketSubHeader,
  ChoosePersonaPersonasSection,
  PersonasHeader,
  ToolDescription,
  MainFooter,
  InlineTextLinkSpan,
  NoPersonasTextSpan,
  FiltersSectionTitle,
  DescriptionSectionImages
} from "./choose-persona.styles";
import Grid from "@material-ui/core/Grid";
import {
  JOB_STABILITY_OPTIONS,
  STAGE_OPTIONS,
  STRESS_CAPACITY_OPTIONS,
  FILTER_TYPES
} from "./store/choose-persona.constants";
import { PersonaCard, FilterSet, SiteHeader } from "src/components";
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
  personasToDisplay
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
    <ChoosePersonaMainSection item xs={12} container spacing={16}>
      <Grid item sm={4} xs={12}>
        <OutOfPocketHeader>Out of Pocket Costs in Family Law</OutOfPocketHeader>
      </Grid>
      <Grid item sm={8} xs={12}>
        <ToolDescription>
          <p>
            This tool calculates and compares typical costs including the money
            people spend during their legal dispute and the money they lose
            through missed work.
          </p>
          <p>
            This tool can help individuals, government, media, and researchers
            to understand the implications of family law.
          </p>
        </ToolDescription>
      </Grid>
    </ChoosePersonaMainSection>
    <ChoosePersonaMainSection item xs={12} container spacing={16}>
      <Grid item sm={4} xs={12}>
        <OutOfPocketSubHeader>
          See family law impacts on a variety of litigants
        </OutOfPocketSubHeader>
      </Grid>
      <Grid item sm={8} xs={12}>
        <FiltersSectionTitle>Filter by:</FiltersSectionTitle>
        <FilterSet
          label="Job Stability"
          options={JOB_STABILITY_OPTIONS}
          setFilter={setFilter}
          currentFilterValue={jobStabilityFilter}
          clearFilter={() =>
            clearFilter({ filterType: FILTER_TYPES.JOB_STABILITY })
          }
        />
        <FilterSet
          label="Stage"
          options={STAGE_OPTIONS}
          setFilter={setFilter}
          currentFilterValue={stageFilter}
          clearFilter={() => clearFilter({ filterType: FILTER_TYPES.STAGE })}
        />
        <FilterSet
          label="Ability to Handle Stress"
          options={STRESS_CAPACITY_OPTIONS}
          setFilter={setFilter}
          currentFilterValue={stressCapacityFilter}
          clearFilter={() =>
            clearFilter({ filterType: FILTER_TYPES.STRESS_CAPACITY })
          }
        />
      </Grid>
    </ChoosePersonaMainSection>

    <ChoosePersonaPersonasSection item xs={12}>
      <PersonasHeader>PERSONAS</PersonasHeader>

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
            <PersonaCard key={persona.name} persona={persona} />
          ))
        )}
      </PersonaCardsContainerDiv>
    </ChoosePersonaPersonasSection>

    <ChoosePersonaMainSection item xs={12} container spacing={16}>
      <Grid item sm={4} xs={12}>
        <OutOfPocketHeader>Methodology</OutOfPocketHeader>
      </Grid>
      <Grid item sm={8} xs={12}>
        The calculations included in this tool are based on research of
        litigants about their experiences in family law disputes, as well as
        statistics from across the country about...
      </Grid>
    </ChoosePersonaMainSection>

    <MainFooter item xs={12} container />
  </Grid>
);

ChoosePersonaComponent.propTypes = {
  setFilter: PropTypes.func.isRequired,
  stageFilter: PropTypes.string,
  jobStabilityFilter: PropTypes.string,
  stressCapacityFilter: PropTypes.string,
  personasToDisplay: PropTypes.array,
  clearFilter: PropTypes.func,
  clearAllFilters: PropTypes.func
};
