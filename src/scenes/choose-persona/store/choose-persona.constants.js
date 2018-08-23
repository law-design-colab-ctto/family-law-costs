export const CHOOSE_PERSONA_ACTION_TYPES = {
  SET_FILTER: "SET_FILTER",
  CLEAR_FILTER: "CLEAR_FILTER",
  CLEAR_ALL_FILTERS: "CLEAR_ALL_FILTERS"
};

export const FILTER_TYPES = {
  STAGE: "stage",
  JOB_STABILITY: "jobStability",
  STRESS_CAPACITY: "stressCapacity"
};

export const FILTER_VALUES = {
  GOOD: "good",
  NEUTRAL: "neutral",
  BAD: "bad",
  APPLICATION: "application",
  SEPARATION_WITH_CHILDREN: "separationWithChildren",
  DIVORCE: "divorce",
  TRIAL: "trial",
  VARIATION: "variation"
};

export const FILTER_VALUE_LABELS = {
  GOOD: "Good",
  NEUTRAL: "Neutral",
  BAD: "Bad",
  APPLICATION: "Application",
  SEPARATION_WITH_CHILDREN: "Separation with Children",
  DIVORCE: "Divorce",
  TRIAL: "Trial",
  VARIATION: "Variation"
};

export const JOB_STABILITY_OPTIONS = [
  {
    optionLabel: FILTER_VALUE_LABELS.GOOD,
    filterType: FILTER_TYPES.JOB_STABILITY,
    filterValue: FILTER_VALUES.GOOD
  },
  {
    optionLabel: FILTER_VALUE_LABELS.NEUTRAL,
    filterType: FILTER_TYPES.JOB_STABILITY,
    filterValue: FILTER_VALUES.NEUTRAL
  },
  {
    optionLabel: FILTER_VALUE_LABELS.BAD,
    filterType: FILTER_TYPES.JOB_STABILITY,
    filterValue: FILTER_VALUES.BAD
  }
];

export const STRESS_CAPACITY_OPTIONS = [
  {
    optionLabel: FILTER_VALUE_LABELS.GOOD,
    filterType: FILTER_TYPES.STRESS_CAPACITY,
    filterValue: FILTER_VALUES.GOOD
  },
  {
    optionLabel: FILTER_VALUE_LABELS.NEUTRAL,
    filterType: FILTER_TYPES.STRESS_CAPACITY,
    filterValue: FILTER_VALUES.NEUTRAL
  },
  {
    optionLabel: FILTER_VALUE_LABELS.BAD,
    filterType: FILTER_TYPES.STRESS_CAPACITY,
    filterValue: FILTER_VALUES.BAD
  }
];

export const STAGE_OPTIONS = [
  {
    optionLabel: FILTER_VALUE_LABELS.APPLICATION,
    filterType: FILTER_TYPES.STAGE,
    filterValue: FILTER_VALUES.APPLICATION
  },
  {
    optionLabel: FILTER_VALUE_LABELS.SEPARATION_WITH_CHILDREN,
    filterType: FILTER_TYPES.STAGE,
    filterValue: FILTER_VALUES.SEPARATION_WITH_CHILDREN
  },
  {
    optionLabel: FILTER_VALUE_LABELS.DIVORCE,
    filterType: FILTER_TYPES.STAGE,
    filterValue: FILTER_VALUES.DIVORCE
  },
  {
    optionLabel: FILTER_VALUE_LABELS.TRIAL,
    filterType: FILTER_TYPES.STAGE,
    filterValue: FILTER_VALUES.TRIAL
  },
  {
    optionLabel: FILTER_VALUE_LABELS.VARIATION,
    filterType: FILTER_TYPES.STAGE,
    filterValue: FILTER_VALUES.VARIATION
  }
];
