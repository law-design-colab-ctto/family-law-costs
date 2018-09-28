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
      "Roberta is 42 years old and is a government employee. She has two children.",

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
      "<p>"The stress of everything has slowly been taking its toll on me. I feel like I’m not the fun parent anymore, because I spend my weekends and vacation days preparing court documents, instead of spending time with my kids."</p><p>"When my kids are with Alice, I don’t feel grounded. I’ve been spending too much money and making big impulse purchases. I’ve been dipping into my savings to pay for everything."</p>"
  },

  {
    name: "Aisha",
    pronouns: PRONOUNS.FEM,
    //SECTION 1 - Persona Card

    //Description displayed directly under persona name
    details:
      "Aisha is 28 years old IT worker with a two-year-old daughter.",

    //then display data from these 2 tags only
    stage: "application",
    jobStability: "STABLE",

    //then quote is displayed on the Persona Card
    quote1:
      "I’m trying my best to keep myself together for my daughter’s sake, but everything is starting to take its toll on me. It’s a lot to deal with and I feel so lonely.",

    //then lead-in text displayed after Persona Card and just before Make Choices section
    intro:
      "Aisha and her partner have had a rough six months, fighting a lot and have decided to separate. Her partner went to the courthouse and then dropped off forms for Aisha to fill out.",

    //SECTION 2 - Make Choices

    income: 50000,
    //Sarah & Meredith would like default value for income to be 50K for all personas
    // for logic tests, note that dailyincome = annual income / 252 working days per year

    locationType: "rural",
    //should default value be no selection?

    //SECTION 3 - Summary
    // Instability Factors (use this data to calculate which temperature pic to display)
    paymentmethodFactor: 5,
    jobflexibilityFactor: 3,
    stablejobFactor: 4,
    healthcostFactor: 2,
    healthimpactFactor: 1,

    //SECTION 4 - Costs of the Case

    //SUBSECTION - Legal Costs

    legalFees: 0, //should default value be zero?
    professionalFees: 0, //should default value be zero?
    //do we need to add field for courtFees?

    conflictmultiplier: 1.01,

    //SUBSECTION - Transportation Costs
    //do we need to add field for transportationCosts?

    //SECTION 5 - Other Financial Impacts

    //begin with  quote for Other Financial Impacts
    timeCostText:
      "Luckily, my workplace is pretty flexible so I’ve been able to go to court so far. I can work from home one day a week and, as long as my team is okay with it, I can shift my hours around.",

    //SUBSECTION -  Days Off Work

    //then display Daysff Quote in quote box (every persona has a daysoff quote)
    daysOffWorkQuote:
      "Everytime I have to go to court, I lose hours I could be working while I prepare for my court appearance.",

    //then display days off text as regular text (if days off work Text = null, then don't display)
    daysOffWorkText:
      "Aisha has some flexibility to work from home one day a week, or to shift her hours if she checks in with her team first.",

    //then display days to prep and attend, days missed for health reasons, and total days missed - persona properties for these calculations:
    daystoprepandattend: 2,
    daysfeelingunwell: 1,

    //then display total lost income

    //SUBSECTION - Childcare

    //display Childcare quote (if childcare quote = null, then don't display)
    childcareCostText:
      "My daughter is too young to take to court so I have to arrange for child care for each appointment or court date.",

    children: 1,
    childcareFees: 0, //should default value be zero?

    //SUBSECTION - MOVING

    //display Moving quote (if moving quote = null, then don't display)
    movingCostText:
      "My ex-partner and I decided it would be best to live apart right away so my daughter and I moved to a new apartment.",

    hasToMove: true,
    movingFees: 0, //should default value be zero?

    //SECTION - Impact on stability

    instabiltiyQuote:
    <p>
    "Things have been really hard since the separation. I just started a new job with great colleagues but the hours are long. The work is challenging and I want to make a good impression, especially during my probation period,. I’m struggling to balance work, the separation, and making sure that I still pick my daughter up from daycare on time."
    </p>
    <p>
    "My sister and best friend live nearby. Sometimes they come over for a glass of wine, but a lot of the time I feel lonely. The stress is getting to me."
    </p>
  },


  {
    name: "Marcus",
    pronouns: PRONOUNS.MASC,
    //SECTION 1 - Persona Card

    //Description displayed directly under persona name
    details:
        "Marcus is a 32-year-old sales manager at a manufacturing company with custody of his three children, ages 5, 6, and 9.",

    //then display data from these 2 tags only
    stage: "separationWithChildren",
    jobStability: "STABLE",

    //then quote is displayed on the Persona Card
    quote1:
      "Barb and I split up 18 months ago and she moved to her sister’s. We worked out a separation agreement and child support arrangements. Six months ago, Barb moved three provinces away for a job. Now it’s just me and the kids and I feel like I’m crumbling under the pressure.",

    //then lead-in text displayed after Persona Card and just before Make Choices section
    intro:
      "Barb wants to start divorce proceedings, while Marcus wants to revisit the child support arrangements now that Barb has moved. Marcus will have to take out a loan to hire a lawyer.",

    //SECTION 2 - Make Choices

    income: 50000,
    //Sarah & Meredith would like default value for income to be 50K for all personas
    // for logic tests, note that dailyincome = annual income / 252 working days per year

    locationType: "rural",
    //should default value be no selection?

    //SECTION 3 - Summary
    // Instability Factors (use this data to calculate which temperature pic to display)
    paymentmethodFactor: 4,
    jobflexibilityFactor: 4,
    stablejobFactor: 2,
    healthcostFactor: 1,
    healthimpactFactor: 2,

    //SECTION 4 - Costs of the Case

    //SUBSECTION - Legal Costs

    legalFees: 0, //should default value be zero?
    professionalFees: 0, //should default value be zero?
    //do we need to add field for courtFees?

    conflictmultiplier: 1.25,

    //SUBSECTION - Transportation Costs
    //do we need to add field for transportationCosts?

    //SECTION 5 - Other Financial Impacts

    //begin with  quote for Other Financial Impacts
    timeCostText:
      "I work in the office from Monday to Friday, 9 to 6. I spoke to my boss about taking days off for court, but was told I’d have to use my vacation days.",

    //SUBSECTION -  Days Off Work

    //then display Daysff Quote in quote box (every persona has a daysoff quote)
    daysOffWorkQuote:
      "In addition to missing work for the court date, I have to take two or three days off to prepare the documents. I get so frazzled in court that I need to write out everything I want to say in court.",

    //then display days off text as regular text (if days off work Text = null, then don't display)
    daysOffWorkText:
      "Marcus has little flexibility to take time off and is using up his vacation to prepare for and attend court.",

    //then display days to prep and attend, days missed for health reasons, and total days missed - persona properties for these calculations:
    daystoprepandattend: 5,
    daysfeelingunwell: 2,

    //then display total lost income

    //SUBSECTION - Childcare

    //display Childcare quote (if childcare quote = null, then don't display)
    childcareCostText:
      "I have custody of the children, so whenever I have to attend court, I need to find a babysitter.",

    children: 3,
    childcareFees: 0, //should default value be zero?

    //SUBSECTION - MOVING

    //display Moving quote (if moving quote = null, then don't display)
    movingCostText:
      null,

    hasToMove: false,
    movingFees: 0, //should default value be zero?

    //SECTION - Impact on stability

    instabiltiyQuote:
    <p>
    "I was already struggling to deal with everything after Barb left, but things have just gotten worse. I’m anxious and preparing for court takes up so much of my time and energy. Every time I go to court, I’m losing time with my kids. They have so many school and sporting events I want to be at and now I have to make it to all the court dates too."
    </p>
    <p>
    "My kids are upset with me. They complain that I’m always busy with “paperwork”. They tell me that their mom is more fun. I’ve been so stressed out and on-edge lately. I’ve snapped at my kids and even people at work. I hung up on a long-time client one day. I managed to smooth things over with my boss, but I’ve been warned to keep my problems at home."
    </p>
  },



  {
    name: "Pablo",
    pronouns: PRONOUNS.MASC,
    //SECTION 1 - Persona Card

    //Description displayed directly under persona name
    details:
        "Pablo is a 44 year-old high school teacher with no children.",

    //then display data from these 2 tags only
    stage: "divorce",
    jobStability: "STABLE",

    //then quote is displayed on the Persona Card
    quote1:
      "Over the last several years, Chris and I have been drifting apart. Things went relatively smoothly when we separated, but now that the divorce process is fully underway, I’m not sleeping and getting sick alot.",

    //then lead-in text displayed after Persona Card and just before Make Choices section
    intro:
      "Pablo and Chris got married after same-sex marriage was legalized. They have mutually decided to get a divorce.",

    //SECTION 2 - Make Choices

    income: 50000,
    //Sarah & Meredith would like default value for income to be 50K for all personas
    // for logic tests, note that dailyincome = annual income / 252 working days per year

    locationType: "rural",
    //should default value be no selection?

    //SECTION 3 - Summary
    // Instability Factors (use this data to calculate which temperature pic to display)
    paymentmethodFactor: 2,
    jobflexibilityFactor: 5,
    stablejobFactor: 1,
    healthcostFactor: 1,
    healthimpactFactor: 3,

    //SECTION 4 - Costs of the Case

    //SUBSECTION - Legal Costs

    legalFees: 0, //should default value be zero?
    professionalFees: 0, //should default value be zero?
    //do we need to add field for courtFees?

    conflictmultiplier: 1.01,

    //SUBSECTION - Transportation Costs
    //do we need to add field for transportationCosts?

    //SECTION 5 - Other Financial Impacts

    //begin with  quote for Other Financial Impacts
    timeCostText:
      "Working as a high school teacher, I’m at work from 8:30am to 3:00pm every day. This makes it hard for me to attend court.",

    //SUBSECTION -  Days Off Work

    //then display Daysff Quote in quote box (every persona has a daysoff quote)
    daysOffWorkQuote:
      "I don’t have any flexibility with my work and have been using my sick days to attend court.",

    //then display days off text as regular text (if days off work Text = null, then don't display)
    daysOffWorkText:
      "Pablo called his union to see if he can miss a day but was told he will have to call in sick to attend court.",

    //then display days to prep and attend, days missed for health reasons, and total days missed - persona properties for these calculations:
    daystoprepandattend: 2,
    daysfeelingunwell: 3,

    //then display total lost income

    //SUBSECTION - Childcare

    //display Childcare quote (if childcare quote = null, then don't display)
    childcareCostText: null,

    children: 0,
    childcareFees: 0, //should default value be zero?

    //SUBSECTION - MOVING

    //display Moving quote (if moving quote = null, then don't display)
    movingCostText:
      "After we decided to get a divorce, Chris moved to a new city. I couldn’t afford the rent on our apartment by myself, so I moved to a new apartment.",

    hasToMove: true,
    movingFees: 0, //should default value be zero?

    //SECTION - Impact on stability

    instabiltiyQuote:
    <p>
    "So far, I have been able to pay for divorce costs each month, but soon I’ll have to dip into my savings."
    </p>
    <p>
    "Ever since we started the divorce process, I’ve been having problems sleeping. My doctor prescribed me sleeping pills for my insomnia, but sometimes I wake up feeling awful. On bad days, I call in sick."
    </p>
  },


  {
    name: "Priya",
    pronouns: PRONOUNS.FEM,
    //SECTION 1 - Persona Card

    //Description displayed directly under persona name
    details:
        "Priya is 40 years old health care worker and has a nine-year-old child.",

    //then display data from these 2 tags only
    stage: "trial",
    jobStability: "STABLE",

    //then quote is displayed on the Persona Card
    quote1:
      "It’s been three years and my ex and I are still fighting over things. The stress is taking its toll on me and my health.",

    //then lead-in text displayed after Persona Card and just before Make Choices section
    intro:
      "Priya began the divorce process 3 years ago and has been unable to resolve all of the issues. They are now going to trial.",

    //SECTION 2 - Make Choices

    income: 50000,
    //Sarah & Meredith would like default value for income to be 50K for all personas
    // for logic tests, note that dailyincome = annual income / 252 working days per year

    locationType: "rural",
    //should default value be no selection?

    //SECTION 3 - Summary
    // Instability Factors (use this data to calculate which temperature pic to display)
    paymentmethodFactor: 5,
    jobflexibilityFactor: 3,
    stablejobFactor: 1,
    healthcostFactor: 2,
    healthimpactFactor: 3,

    //SECTION 4 - Costs of the Case

    //SUBSECTION - Legal Costs

    legalFees: 0, //should default value be zero?
    professionalFees: 0, //should default value be zero?
    //do we need to add field for courtFees?

    conflictmultiplier: 2.01,

    //SUBSECTION - Transportation Costs
    //do we need to add field for transportationCosts?

    //SECTION 5 - Other Financial Impacts

    //begin with  quote for Other Financial Impacts
    timeCostText:
      "My marriage fell apart 3 years ago, but we haven’t been able to resolve several issues. We are now getting ready for trial.",

    //SUBSECTION -  Days Off Work

    //then display Daysff Quote in quote box (every persona has a daysoff quote)
    daysOffWorkQuote:
      "Every time I have to go to court, I take two days off from work to prepare all of the necessary documents and to mentally prepare myself for the day.",

    //then display days off text as regular text (if days off work Text = null, then don't display)
    daysOffWorkText:
      "Pryia work is shift work and has some flexibility if she needs to appear in court during a scheduled work shift.",

    //then display days to prep and attend, days missed for health reasons, and total days missed - persona properties for these calculations:
    daystoprepandattend: 4,
    daysfeelingunwell: 1,

    //then display total lost income

    //SUBSECTION - Childcare

    //display Childcare quote (if childcare quote = null, then don't display)
    childcareCostText:
      "Every time I take a day off work, I have to pay for childcare for before and after school.",

    children: 1,
    childcareFees: 0, //should default value be zero?

    //SUBSECTION - MOVING

    //display Moving quote (if moving quote = null, then don't display)
    movingCostText:
      null,

    hasToMove: false,
    movingFees: 0, //should default value be zero?

    //SECTION - Impact on stability

    instabiltiyQuote:
    <p>
    "I feel like I’ve been perpetually stressed for the past three years. I had to take out a loan in order to cover all the expenses."
    </p>
    <p>
    "I get very anxious in the days leading up to my court dates. I lose my appetite and stop eating. I’m getting sick more frequently and spending more on my medical costs."
    </p>
  },
  {
    name: "Maria",
    pronouns: PRONOUNS.FEM,
    //SECTION 1 - Persona Card

    //Description displayed directly under persona name
    details:
        "Maria is 58 years old and is working as a part-time professional. Her two adult children frequently spend time at her place.",

    //then display data from these 2 tags only
    stage: "variation",
    jobStability: "CONTRACT",

    //then quote is displayed on the Persona Card
    quote1:
      "My ex-husband and I divorced several years ago. I thought everything was over, but now I have to go back to court again. Just thinking about it stresses me out.",

    //then lead-in text displayed after Persona Card and just before Make Choices section
    intro:
      "Maria’s ex-husband is seeking a variation (reduction) in the amount of spousal support he pays.",

    //SECTION 2 - Make Choices

    income: 50000,
    //Sarah & Meredith would like default value for income to be 50K for all personas
    // for logic tests, note that dailyincome = annual income / 252 working days per year

    locationType: "rural",
    //should default value be no selection?

    //SECTION 3 - Summary
    // Instability Factors (use this data to calculate which temperature pic to display)
    paymentmethodFactor: 4,
    jobflexibilityFactor: 3,
    stablejobFactor: 3,
    healthcostFactor: 1,
    healthimpactFactor: 2,

    //SECTION 4 - Costs of the Case

    //SUBSECTION - Legal Costs

    legalFees: 0, //should default value be zero?
    professionalFees: 0, //should default value be zero?
    //do we need to add field for courtFees?

    conflictmultiplier: 1.11,

    //SUBSECTION - Transportation Costs
    //do we need to add field for transportationCosts?

    //SECTION 5 - Other Financial Impacts

    //begin with  quote for Other Financial Impacts
    timeCostText:
      "Since the divorce, I’ve been taking on new clients, part-time. My schedule is relatively flexible - I’m self-employed.",

    //SUBSECTION -  Days Off Work

    //then display Daysff Quote in quote box (every persona has a daysoff quote)
    daysOffWorkQuote:
      "I have to set aside time before court to mentally prepare myself and make sure that I have all the right documents.",

    //then display days off text as regular text (if days off work Text = null, then don't display)
    daysOffWorkText:
      "Maria’s work flexibility means that she does not have to take “time off” to attend court.",

    //then display days to prep and attend, days missed for health reasons, and total days missed - persona properties for these calculations:
    daystoprepandattend: 1,
    daysfeelingunwell: 2,

    //then display total lost income

    //SUBSECTION - Childcare

    //display Childcare quote (if childcare quote = null, then don't display)
    childcareCostText:
      null,

    children: 0,
    childcareFees: 0, //should default value be zero?

    //SUBSECTION - MOVING

    //display Moving quote (if moving quote = null, then don't display)
    movingCostText:
      null,

    hasToMove: false,
    movingFees: 0, //should default value be zero?

    //SECTION - Impact on stability

    instabiltiyQuote:
    <p>
    "I’m happy to be working again, but it’s been hard since the court proceedings began. I am worried about my business. Going to court leaves me feeling exhausted and drained. I often cancel my appointments for the next day.  I can tell my clients are unhappy with me."
    </p>
    <p>
    "Because English is my second language, I’m nervous that I might not understand what happens in court. I’ve hired someone from the local community centre to help translate for me in court. I pay for everything on my credit cards. All this pressure is putting a strain on my relationships."
    </p>
  },
  {
    name: "Philippe",
    pronouns: PRONOUNS.MASC,
    //SECTION 1 - Persona Card

    //Description displayed directly under persona name
    details:
        "Philippe is 36 years old seasonal worker who has been laid-off for the winter and has two children, ages 4 and 6.",

    //then display data from these 2 tags only
    stage: "variation",
    jobStability: "BAD",

    //then quote is displayed on the Persona Card
    quote1:
      "It's humiliating to admit that I need money from my ex to support my children, but I can't do it on my own income. Preparing for court and having to attend court is very stressful.",

    //then lead-in text displayed after Persona Card and just before Make Choices section
    intro:
      "Philippe got divorced two years ago. Philippe has physical custody of their children and is now seeking to change the amount of child support, now that his ex-wife has a better paying job.",

    //SECTION 2 - Make Choices

    income: 50000,
    //Sarah & Meredith would like default value for income to be 50K for all personas
    // for logic tests, note that dailyincome = annual income / 252 working days per year

    locationType: "rural",
    //should default value be no selection?

    //SECTION 3 - Summary
    // Instability Factors (use this data to calculate which temperature pic to display)
    paymentmethodFactor: 4,
    jobflexibilityFactor: 1,
    stablejobFactor: 4,
    healthcostFactor: 2,
    healthimpactFactor: 2,

    //SECTION 4 - Costs of the Case

    //SUBSECTION - Legal Costs

    legalFees: 0, //should default value be zero?
    professionalFees: 0, //should default value be zero?
    //do we need to add field for courtFees?

    conflictmultiplier: 1.68,

    //SUBSECTION - Transportation Costs
    //do we need to add field for transportationCosts?

    //SECTION 5 - Other Financial Impacts

    //begin with  quote for Other Financial Impacts
    timeCostText:
      "If my court dates are in the off-season, I can attend  court without missing work.",

    //SUBSECTION -  Days Off Work

    //then display Daysff Quote in quote box (every persona has a daysoff quote)
    daysOffWorkQuote:
      "I still need to dedicate time to prepare for court",

    //then display days off text as regular text (if days off work Text = null, then don't display)
    daysOffWorkText:
      "While he has the flexibility to manage court appearances and prep, he still has to organize care for his children.",

    //then display days to prep and attend, days missed for health reasons, and total days missed - persona properties for these calculations:
    daystoprepandattend: 2,
    daysfeelingunwell: 0,

    //then display total lost income

    //SUBSECTION - Childcare

    //display Childcare quote (if childcare quote = null, then don't display)
    childcareCostText:
      "Whenever I got to court, I have to find a babysitter for the kids.",

    children: 2,
    childcareFees: 0, //should default value be zero?

    //SUBSECTION - MOVING

    //display Moving quote (if moving quote = null, then don't display)
    movingCostText:
      null,

    hasToMove: false,
    movingFees: 0, //should default value be zero?

    //SECTION - Impact on stability

    instabiltiyQuote:
    <p>
    "My work is seasonal and I was laid off for the winter. I’ve been paying for everything using my credit cards. I worry about how I will pay off my credit card bills every month."
    </p>
    <p>
    "Going to court is very stressful. A friend helps me review my paperwork and sometimes comes with me to court. My neighbour sometimes offers to watch my children when I go to court. I feel guilty imposing on people but I don’t know how I would do it without their help."
    </p>
    <p>
    "The stress is getting to me. I've started drinking heavily after the children go to bed to deal with everything."
    </p>
  },
  {
    name: "Ahmed",
    pronouns: PRONOUNS.MASC,
    //SECTION 1 - Persona Card

    //Description displayed directly under persona name
    details:
        "Ahmed is 52 years old, works in construction and has one child who is 20 and away at college.",

    //then display data from these 2 tags only
    stage: "divorce",
    jobStability: "CONTRACT",

    //then quote is displayed on the Persona Card
    quote1:
      "Going to court is very stressful and makes me uncomfortable.  I feel terrible every time I go to court, but I don’t want to ask for help from anyone, especially from my son. I’ve never been able to share my feelings very openly. I feel like I have pushed my friends away.",

    //then lead-in text displayed after Persona Card and just before Make Choices section
    intro:
      "Since beginning the divorce process over four years ago, they cannot agree on anything, resulting in multiple delays.",

    //SECTION 2 - Make Choices

    income: 50000,
    //Sarah & Meredith would like default value for income to be 50K for all personas
    // for logic tests, note that dailyincome = annual income / 252 working days per year

    locationType: "rural",
    //should default value be no selection?

    //SECTION 3 - Summary
    // Instability Factors (use this data to calculate which temperature pic to display)
    paymentmethodFactor: 2,
    jobflexibilityFactor: 5,
    stablejobFactor: 5,
    healthcostFactor: 2,
    healthimpactFactor: 5,

    //SECTION 4 - Costs of the Case

    //SUBSECTION - Legal Costs

    legalFees: 0, //should default value be zero?
    professionalFees: 0, //should default value be zero?
    //do we need to add field for courtFees?

    conflictmultiplier: 3.82,

    //SUBSECTION - Transportation Costs
    //do we need to add field for transportationCosts?

    //SECTION 5 - Other Financial Impacts

    //begin with  quote for Other Financial Impacts
    timeCostText:
      "We’ve been fighting for years and I don’t know when things will end.",

    //SUBSECTION -  Days Off Work

    //then display Daysff Quote in quote box (every persona has a daysoff quote)
    daysOffWorkQuote:
      "Every time I have to go to court, I can’t work that day. I lose a day’s worth of pay, because I’m not paid for any time off. After court, I feel so shaken and awful, sometimes I don’t leave the house for days.",

    //then display days off text as regular text (if days off work Text = null, then don't display)
    daysOffWorkText:
      "Ahmed has inconsistent hours in his construction job and any time he takes off work for court is unpaid.",

    //then display days to prep and attend, days missed for health reasons, and total days missed - persona properties for these calculations:
    daystoprepandattend: 3,
    daysfeelingunwell: 5,

    //then display total lost income

    //SUBSECTION - Childcare

    //display Childcare quote (if childcare quote = null, then don't display)
    childcareCostText:
      null,

    children: 0,
    childcareFees: 0, //should default value be zero?

    //SUBSECTION - MOVING

    //display Moving quote (if moving quote = null, then don't display)
    movingCostText:
      null,

    hasToMove: false,
    movingFees: 0, //should default value be zero?

    //SECTION - Impact on stability

    instabiltiyQuote:
    <p>
    "I feel like I can’t talk to anyone about what I’m going through. I’ve lost so many friends over the past 4 years and I feel isolated and alone."
    </p>
    <p>
    "I have been using my retirement savings to pay the legal fees. I was hoping I could retire in the next 5 to 10 years, but now I’m worried that I won't be able to retire anytime soon."
    </p>
  }
];
