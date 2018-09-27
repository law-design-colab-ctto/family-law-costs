const PRONOUNS = {
  FEM: {
    subjective: "she",
    objective: "her",
    possessive: "her"
  },
  MASC: {
    subjective: "he",
    objective: "him",
    possessive: "his"
  },
  NEUTRAL: {
    subjective: "they",
    objective: "them",
    possessive: "their"
  }
};

export const PERSONAS = [
  {
    name: "Roberta",
    pronouns: PRONOUNS.FEM,

    //SECTION 1 - Persona Card

    //Description displayed directly under persona name
    details:
      "I am 42 years old, I am a government worker, and I have two children. My wife and I separated a year ago.",

    //then display data from these 2 tags only
    stage: "separationWithChildren",
    jobStability: "bad",

    //then quote is displayed on the Persona Card
    quote1:
      "We are only just starting the divorce and I'm already losing sleep. I'm so stressed about going to court. I hate that I'm falling apart while alice seems just fine.",

    //then lead-in text displayed after Persona Card and just before Make Choices section
    intro:
      "Roberta and her partner Alice split up a year ago and are about to start the divorce proceedings.",

    //SECTION 2 - Make Choices

    income: 50000,
    //Sarah & Meredith would like default value for income to be 50K for all personas
    // for logic tests, note that dailyincome = annual income / 252 working days per year

    locationType: "rural",
    //should default value be no selection?

    //SECTION 3 - Summary
    // Instability Factors (use this data to calculate which temperature pic to display)
    paymentmethodFactor: 2,
    jobflexibilityFactor: 2,
    stablejobFactor: 1,
    healthcostFactor: 1,
    healthimpactFactor: 2,

    //SECTION 4 - Costs of the Case

    //SUBSECTION - Legal Costs

    legalFees: 10468, //should default value be zero?
    professionalFees: 10710, //should default value be zero?
    //do we need to add field for courtFees?

    conflictmultiplier: 1.68,

    //SUBSECTION - Transportation Costs
    //do we need to add field for transportationCosts?

    //SECTION 5 - Other Financial Impacts

    //begin with  quote for Other Financial Impacts
    timeCostText:
      "It’s been six months since we started the divorce proceedings. I’m thankful that I have a flexible job, because I have been able to schedule day time appointments with my lawyer and attend court without too much trouble.",

    //SUBSECTION -  Days Off Work

    //then display Daysff Quote in quote box (every persona has a daysoff quote)
    daysOffWorkQuote:
      "Every time I go to court, I have to take a couple days off to prepare documents. The process is so stressful, that I often end up sick from the anxiety and have to take additional days off work.",

    //then display days off text as regular text (if days off work Text = null, then don't display)
    daysOffWorkText:
      "Roberta is able to take time off work to make appointments.",

    //then display days to prep and attend, days missed for health reasons, and total days missed - persona properties for these calculations:
    daystoprepandattend: 3,
    daysfeelingunwell: 2,

    //then display total lost income

    //SUBSECTION - Childcare

    //display Childcare quote (if childcare quote = null, then don't display)
    childcareCostText:
      "Everytime I take a day off work, I have to pay for childcare",

    children: 1,
    childcareFees: 1450, //should default value be zero?

    //SUBSECTION - MOVING

    //display Moving quote (if moving quote = null, then don't display)
    movingCostText:
      "After Alice moved out last year, I couldn't afford the rent on my own anymore. I've had to move to a smaller place.",

    hasToMove: true,
    movingFees: 3401, //should default value be zero?

    //SECTION - Impact on stability

    instabiltiyQuote:
      "“The stress of everything has slowly been taking its toll on me. I feel like I’m not the fun parent anymore, because I spend my weekends and vacation days preparing court documents, instead of spending time with my kids. When my kids are with Alice, I don’t feel grounded. I’ve been spending too much money and making big impulse purchases. I’ve been dipping into my savings to pay for everything."
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
    jobStability: "contract",
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
    jobStability: "stable",
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
    jobStability: "stable",
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
    jobStability: "contract",
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
    jobStability: "contract",
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
