export const state = () => ({
  answerData: {}
})

export const getters = {
  getAnswerData(state) {
    return state.answerData
  }
}

export const mutations = {
  setAnswerData(state, payload) {
    state.answerData = payload
  }
}

export const actions = {}
