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

//Updated Structure:
// Baseball Card:
// [Name]
//[Description] called "details"
//[Tags] only 2 tags
//[Quote] called "quote1"
//[Lead in text] called "intro"

//User Input Section
// name
// province
// distance
// income
// lawyer or self
// eligibility reasons

//Costs of the Case section
//Legal Costs (legal blurb, value of having a lawyer pop up)
//Transportation Costs (tranposrt blurb)


//Other Financial Impacts section
// financial impact quote
// days off
    // days off quote, then show days to prep and attend, days due to health, total missed days
// Total lost income
// Childcare costs (do not show if zero) (childcare quote)
// Moving costs (do not show if zero) (moving quote)

// Impact on Stabiltiy Section
  // stability blurb
  // stability quote



// What if Section
  // what if blurb
  // what if chart


export const PERSONAS = [
  {
    name: "Roberta",
    pronouns: PRONOUNS.FEM,
    details:
      "I am 42 years old, I am a government worker, and I have two children. My wife and I separated a year ago.",
      // this is text displayed on the persona card
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
      // this is "lead in" text
      // "Roberta and her wife separated a year ago. They are now starting divorce proceedings."

    quote1:
    //this is quote displayed on persona card
      "We are only just starting the divorce and I'm already losing sleep. I'm so stressed about going to court. I hate that I'm falling apart while alice seems just fine.",
      //“We’re only just starting the divorce process and I’m already losing sleep. I’m so stressed out and nervous about going to court. I hate that I’m falling apart while Alice seems just fine.”
    movingCostText:
    // this quote is displayed under the moving costs heading
      "After Alice moved out last year, I couldn't afford the rent on my own anymore. I've had to move to a smaller place.",
    childcareCostText:
    // this quote is displayed under the childcare costs heading
      "Everytime I take a day off work, I have to pay for childcare",
      //“Every time I take a day off work, I have to pay for childcare.”

    timeCostText:
    // rename to financialImpactQuote:
    // this is displayed after the Other Financial Impacts heading.
      "It’s been six months since we started the divorce proceedings. I’m thankful that I have a stable and flexible job, because I have been able to schedule day time appointments with my lawyer and attend court without too much trouble.",

      //“It’s been six months since we started the divorce proceedings. I’m thankful that I have a flexible job, because I have been able to schedule day time appointments with my lawyer and attend court without too much trouble.”

    daysOffWorkText:
    //this quote is displayed directly after the "days off" heading
      "Every time I have to go to court, I have to take a couple days off to prepare documents. The process is so stressful, that I often end up feeling sick to my stomach and have to take additional days off work to recover.",
      //“Every time I go to court, I have to take a couple days off to prepare documents. The process is so stressful, that I often end up sick from the anxiety and have to take additional days off work.”

    stressText1:
      // call this "Instability Quote"? It is displayed after both the standard instabiltiy blurb and the instability illustration.

      "The stress of everything has slowly been taking its toll on me. I feel like I’m not the fun parent anymore, because I spend my weekends and vacation days preparing court documents, instead of spending time with my kids.",


      //“The stress of everything has slowly been taking its toll on me. I feel like I’m not the fun parent anymore, because I spend my weekends and vacation days preparing court documents, instead of spending time with my kids.

      //When my kids are with Alice, I don’t feel grounded. I’ve been spending too much money and making big impulse purchases. I’ve been dipping into my savings to pay for everything.”

    stressText2:
      //I  don't think this has a place anymore
      "Alice and I have shared custody of the kids, but when my kids aren’t around I don’t feel grounded. Lately I’ve been stress shopping and making impulse purchases of large items.",

    stressText3: "I’ve been dipping into my savings to pay for everything.",
    //I  don't think this has a place anymore

    conflictText: "Roberta and Alice are on relatively civil terms."
    //I  don't think this has a place anymore
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
