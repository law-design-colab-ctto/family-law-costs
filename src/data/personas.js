const PRONOUNS = {
  FEM: {
    subjective: "she",
    objective: "her",
    possessive: "her",
    possessiveUpper: "Her"
  },
  MASC: {
    subjective: "he",
    objective: "him",
    possessive: "his",
    possessiveUpper: "His"
  },
  NEUTRAL: {
    subjective: "they",
    objective: "them",
    possessive: "their",
    possessiveUpper: "Their"
  }
};

export const PERSONAS = [
  {
    name: "Roberta",
    pronouns: PRONOUNS.FEM,
    details:
      "I am 42 years old, I am a government worker, and I have two children. My wife and I separated a year ago.",
    stage: "separationWithChildren",
    jobStability: "bad",
    stressCapacity: 50,
    children: 1,
    hasToMove: true,
    income: 50000,
    legalFees: 10468,
    professionalFees: 10710,
    childcareFees: 1450,
    movingFees: 3401,
    locationType: "rural",
    intro:
      "Roberta and her partner Alice split up a year ago and are about to start the divorce proceedings.",
    quote1:
      "We are only just starting the divorce and I'm already losing sleep. I'm so stressed about going to court. I hate that I'm falling apart while alice seems just fine.",
    movingCostText:
      "After Alice moved out last year, I couldn't afford the rent on my own anymore. I've had to move to a smaller place.",
    childcareCostText:
      "Everytime I take a day off work, I have to pay for childcare",
    timeCostText:
      "It’s been six months since we started the divorce proceedings. I’m thankful that I have a stable and flexible job, because I have been able to schedule day time appointments with my lawyer and attend court without too much trouble.",
    daysOffWorkText:
      "Every time I have to go to court, I have to take a couple days off to prepare documents. The process is so stressful, that I often end up feeling sick to my stomach and have to take additional days off work to recover.",
    stressText1:
      "The stress of everything has slowly been taking its toll on me. I feel like I’m not the fun parent anymore, because I spend my weekends and vacation days preparing court documents, instead of spending time with my kids.",
    stressText2:
      "Alice and I have shared custody of the kids, but when my kids aren’t around I don’t feel grounded. Lately I’ve been stress shopping and making impulse purchases of large items.",
    stressText3: "I’ve been dipping into my savings to pay for everything.",
    conflictText: "Roberta and Alice are on relatively civil terms."
  },
  {
    name: "Aisha",
    pronouns: PRONOUNS.FEM,
    stage: "application",
    jobStability: "bad",
    stressCapacity: 100,
    children: 0,
    dependents: "yes",
    income: 80000,
    intro: "",
    quote1: "",
    movingCostText: "",
    childcareCostText: "",
    timeCostText: "",
    daysOffWorkText: ""
  },
  {
    name: "Marcus",
    pronouns: PRONOUNS.MASC,
    stage: "separationWithChildren",
    jobStability: "neutral",
    stressCapacity: 100,
    children: 0,
    dependents: "yes",
    income: 80000,
    intro: "",
    quote1: "",
    movingCostText: "",
    childcareCostText: "",
    timeCostText: "",
    daysOffWorkText: ""
  },
  {
    name: "Pablo",
    pronouns: PRONOUNS.MASC,
    stage: "divorce",
    jobStability: "good",
    stressCapacity: 50,
    children: 0,
    dependents: "yes",
    income: 80000,
    intro: "",
    quote1: "",
    movingCostText: "",
    childcareCostText: "",
    timeCostText: "",
    daysOffWorkText: ""
  },
  {
    name: "Priya",
    pronouns: PRONOUNS.FEM,
    stage: "trial",
    jobStability: "good",
    stressCapacity: 100,
    children: 0,
    dependents: "yes",
    income: 80000,
    intro: "",
    quote1: "",
    movingCostText: "",
    childcareCostText: "",
    timeCostText: "",
    daysOffWorkText: ""
  },
  {
    name: "Maria",
    pronouns: PRONOUNS.FEM,
    stage: "variation",
    jobStability: "neutral",
    stressCapacity: 100,
    children: 0,
    dependents: "no",
    income: 80000,
    intro: "",
    quote1: "",
    movingCostText: "",
    childcareCostText: "",
    timeCostText: "",
    daysOffWorkText: ""
  },
  {
    name: "Philippe",
    pronouns: PRONOUNS.MASC,
    stage: "variation",
    jobStability: "neutral",
    stressCapacity: 50,
    children: 0,
    dependents: "no",
    income: 80000,
    intro: "",
    quote1: "",
    movingCostText: "",
    childcareCostText: "",
    timeCostText: "",
    daysOffWorkText: ""
  },
  {
    name: "Ahmed",
    pronouns: PRONOUNS.MASC,
    stage: "divorce",
    jobStability: "bad",
    stressCapacity: 0,
    children: 0,
    dependents: "no",
    income: 80000,
    intro: "",
    quote1: "",
    movingCostText: "",
    childcareCostText: "",
    timeCostText: "",
    daysOffWorkText: ""
  }
];
