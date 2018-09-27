export const CHOOSE_PERSONA_ACTION_TYPES = {
  SET_FILTER: "SET_FILTER",
  CLEAR_FILTER: "CLEAR_FILTER",
  CLEAR_ALL_FILTERS: "CLEAR_ALL_FILTERS"
};

export const FILTER_TYPES = {
  STAGE: "stage",
  JOB_STABILITY: "jobStability",
  STRESS_CAPACITY: "stressCapacity",
  DEPENDENTS: "dependents"
};

export const FILTER_VALUES = {
  STABLE: "stable",
  CONTRACT: "contract",
  BAD: "bad",
  APPLICATION: "application",
  SEPARATION_WITH_CHILDREN: "separationWithChildren",
  DIVORCE: "divorce",
  TRIAL: "trial",
  VARIATION: "variation",
  LOW: 0,
  MEDIUM: 50,
  HIGH: 100,
  YES: "yes",
  NO: "no"
};

export const FILTER_VALUE_LABELS = {
  STABLE: "Stable employment",
  CONTRACT: "Contract work",
  BAD: "Precarious work or unemployment",
  APPLICATION: "Application",
  SEPARATION_WITH_CHILDREN: "Separation",
  //changed label from "Separation with Children" to just "Separation"
  DIVORCE: "Divorce",
  TRIAL: "Trial",
  VARIATION: "Variation",
  [FILTER_VALUES.LOW]: "Low",
  [FILTER_VALUES.MEDIUM]: "Medium",
  [FILTER_VALUES.HIGH]: "High"
};

export const JOB_STABILITY_OPTIONS = [
  {
    optionLabel: FILTER_VALUE_LABELS.STABLE,
    filterType: FILTER_TYPES.JOB_STABILITY,
    filterValue: FILTER_VALUES.STABLE
  },
  {
    optionLabel: FILTER_VALUE_LABELS.CONTRACT,
    filterType: FILTER_TYPES.JOB_STABILITY,
    filterValue: FILTER_VALUES.CONTRACT
  },
  {
    optionLabel: FILTER_VALUE_LABELS.BAD,
    filterType: FILTER_TYPES.JOB_STABILITY,
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
