import React from "react";
import PropTypes from "prop-types";
import { equals } from "ramda";
import {
  PersonaCardsContainerDiv,
  MainHeader,
  DescriptiveSection,
  MissionHeader,
  ChoosePersonaMainSection,
  FilterButton,
  FilterButtonSet,
  FilterButtonSetLabel,
  Divider,
  OutOfPocketHeader,
  OutOfPocketSubHeader
} from "./choose-persona.styles";
import Grid from "@material-ui/core/Grid";
import { FILTER_TYPES, FILTER_VALUES } from "./store/choose-persona.constants";
import { PersonaCard } from "src/components";

export const ChoosePersonaComponent = ({
  setFilter,
  jobStabilityFilter,
  stressCapacityFilter,
  personasToDisplay
}) => (
  <Grid container direction="column">
    <MainHeader item xs={12} container justify="space-between">
      <Grid item>Out-of-pocket costs</Grid>
      <Grid item>View report</Grid>
    </MainHeader>
    <DescriptiveSection item xs={12}>
      <MissionHeader>Our mission</MissionHeader>
      <div>
        Its difficult to make changes to court processes or services without an
        understanding of the costs to people in the family system. This site
        tries to facilitate that understanding.
      </div>
    </DescriptiveSection>
    <ChoosePersonaMainSection item xs={12} container spacing={12}>
      <Grid item sm={4} xs={12}>
        <OutOfPocketHeader>Out of pocket costs in family law</OutOfPocketHeader>
      </Grid>
      <Grid item sm={8} xs={12}>
        This tool calculates and compares typical costs including the money
        people spend during their legal dispute and the money they lose through
        missed work. This tool can help individuals, government, media, and
        researchers to understand the implications of family law.
      </Grid>
    </ChoosePersonaMainSection>
    <ChoosePersonaMainSection item xs={12} container spacing={12}>
      <Grid item sm={4} xs={12}>
        <OutOfPocketSubHeader>
          See family law impacts on a variety of litigants
        </OutOfPocketSubHeader>
      </Grid>
      <Grid item sm={8} xs={12}>
        <FilterButtonSetLabel>Job Stability</FilterButtonSetLabel>
        <FilterButtonSet>
          <FilterButton
            active={equals(jobStabilityFilter, FILTER_VALUES.GOOD)}
            onClick={() =>
              setFilter({
                filterType: FILTER_TYPES.JOB_STABILITY,
                filterValue: FILTER_VALUES.GOOD
              })
            }
          >
            Good
          </FilterButton>
          <FilterButton
            active={equals(jobStabilityFilter, FILTER_VALUES.NEUTRAL)}
            onClick={() =>
              setFilter({
                filterType: FILTER_TYPES.JOB_STABILITY,
                filterValue: FILTER_VALUES.NEUTRAL
              })
            }
          >
            Neutral
          </FilterButton>
          <FilterButton
            active={equals(jobStabilityFilter, FILTER_VALUES.BAD)}
            onClick={() =>
              setFilter({
                filterType: FILTER_TYPES.JOB_STABILITY,
                filterValue: FILTER_VALUES.BAD
              })
            }
          >
            Bad
          </FilterButton>
        </FilterButtonSet>
        <Divider />

        <FilterButtonSetLabel>Ability to Handle Stress</FilterButtonSetLabel>
        <FilterButtonSet>
          <FilterButton
            active={equals(stressCapacityFilter, FILTER_VALUES.GOOD)}
            onClick={() =>
              setFilter({
                filterType: FILTER_TYPES.STRESS_CAPACITY,
                filterValue: FILTER_VALUES.GOOD
              })
            }
          >
            Good
          </FilterButton>
          <FilterButton
            active={equals(stressCapacityFilter, FILTER_VALUES.NEUTRAL)}
            onClick={() =>
              setFilter({
                filterType: FILTER_TYPES.STRESS_CAPACITY,
                filterValue: FILTER_VALUES.NEUTRAL
              })
            }
          >
            Neutral
          </FilterButton>
          <FilterButton
            active={equals(stressCapacityFilter, FILTER_VALUES.BAD)}
            onClick={() =>
              setFilter({
                filterType: FILTER_TYPES.STRESS_CAPACITY,
                filterValue: FILTER_VALUES.BAD
              })
            }
          >
            Bad
          </FilterButton>
        </FilterButtonSet>
        <Divider />
      </Grid>
    </ChoosePersonaMainSection>

    <Grid item xs={12} container>
      <PersonaCardsContainerDiv>
        {personasToDisplay.map(persona => (
          <PersonaCard key={persona.name} persona={persona} />
        ))}
      </PersonaCardsContainerDiv>
    </Grid>
  </Grid>
);

ChoosePersonaComponent.propTypes = {
  setFilter: PropTypes.func.isRequired,
  stageFilter: PropTypes.string,
  jobStabilityFilter: PropTypes.string,
  stressCapacityFilter: PropTypes.string,
  personasToDisplay: PropTypes.array
};
