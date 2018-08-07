import C from '../../../../scenes/choose-persona/store/choose-persona.constants.js'
import { choosePersonaReducer } from '../../../../scenes/choose-persona/store/choose-persona.reducer.js'

describe ("choosePersonaReducer Reducer", function () {
  it("SET_PERSONA_STAGE_FILTER success", function () {
    const state = {
      stageFilter: "a"
    }
    const action = {
      type: C.SET_PERSONA_STAGE_FILTER,
      payload: "dest"
    }
    const results = choosePersonaReducer(state, action)
    expect(results).toEqual({
      stageFilter: 'reducer Test'
    })
  })

  it("Links to Aisha")

  it("Links to Marcus")

  it("Links to Roberta")

  it("Links to Pablo")

  it("Links to Priya")

  it("Links to Maria")

  it("Links to Philippe")

  it("Links to Ahmed")

})

describe("Filter Reducer", () => {
  it("Filters by Application")

  it("Filters by Separation with Children")

  it("Filters by Divorce")

  it("Filters by Trial")

  it("Filters by Variation")
})
