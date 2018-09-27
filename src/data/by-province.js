export const COST_OF_CHILDCARE_PER_DAY = {
  bc: 48,
  ab: 42,
  sk: 31,
  mb: 23,
  on: 50,
  qc: 8,
  nb: 34,
  pe: 29,
  ns: 38,
  nl: 43,
  yt: 31,
  nt: 34,
  nu: 30
};

export const COURT_FEES_BY_STAGE = {
  bc: {
    application: 200,
    separationWithChildren: 80,
    divorce: 200,
    trial: 200,
    variation: 80
  },
  ab: {
    application: 260,
    separationWithChildren: 50,
    divorce: 260,
    trial: 600,
    variation: 50
  },
  sk: {
    application: 75,
    separationWithChildren: 10,
    divorce: 75,
    trial: 75,
    variation: 30
  },
  mb: {
    application: 150,
    separationWithChildren: 35,
    divorce: 150,
    trial: 200,
    variation: 35
  },
  on: {
    application: 157,
    separationWithChildren: null,
    divorce: 157,
    trial: 280,
    variation: 157
  },
  qc: {
    application: 302,
    separationWithChildren: 151,
    divorce: 302,
    trial: null,
    variation: 151
  },
  nb: {
    application: 100,
    separationWithChildren: 35,
    divorce: 100,
    trial: 75,
    variation: 35
  },
  pe: {
    application: 100,
    separationWithChildren: 50,
    divorce: 100,
    trial: 200,
    variation: 50
  },
  ns: {
    application: 44,
    separationWithChildren: 44,
    divorce: 292,
    trial: null,
    variation: 44
  },
  nl: {
    application: 120,
    separationWithChildren: null,
    divorce: 130,
    trial: null,
    variation: null
  },
  yt: {
    application: 140,
    separationWithChildren: 50,
    divorce: 140,
    trial: 140,
    variation: 50
  },
  nt: {
    application: 165,
    separationWithChildren: null,
    divorce: 165,
    trial: 55,
    variation: 165
  },
  nu: {
    application: 200,
    separationWithChildren: null,
    divorce: 200,
    trial: 100,
    variation: null
  }
};

export const LEGAL_AID_CUTOFF = {
  bc: [null, null, null],
  ab: [19653, 24333, 34627],
  sk: [11820, 18300, 20280],
  mb: [23000, 27000, 31000],
  on: [14453, 25003, 28503],
  qc: [20475, 25050, 26742],
  nb: [14400, 21600, 22800],
  pe: [17632, 24, 554],
  ns: [14400, 21600, 22800],
  nl: [14400, 21600, 22800],
  yt: [19200, 22800, 26400],
  nt: [25140, 31116, 44328],
  nu: [50400, 62400, 88800]
};

export const MOVING_FEES = {
  bc: 3731,
  ab: 3633,
  sk: 3599,
  mb: 3607,
  on: 3657,
  qc: 3202,
  nb: 3275,
  pe: 3401,
  ns: 3609,
  nl: 3441,
  yt: 3583,
  nt: 4136,
  nu: 5097
};

export const TRANSPORT_FEES = {
  rural: 20,
  urban: 50,
  suburban: 120,
  remote: 300
};

export const LEGAL_FEES = {
  application: 3780,
  separationWithChildren: 10710,
  divorce: 3780,
  trial: 25830,
  variation: 2362
};

export const NUMBER_OF_COURT_EVENTS = {
  application: 1,
  separationWithChildren: 10,
  divorce: 6.5,
  trial: 16,
  variation: 8.6
};

export const PROFESSIONAL_FEES = {
  application: 0,
  separationWithChildren: 13681,
  divorce: 7573,
  trial: 13681,
  variation: 6108
};

export const LEGAL_AID_ELIGIBILITY = {
  application: true,
  separationWithChildren: true,
  divorce: false,
  trial: true,
  variation: false
};
