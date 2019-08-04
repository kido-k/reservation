export const strict = false

export const state = () => ({
  user: null
})

export const getters = {
  userData(state) {
    return state.user
  },
  isAuth(state) {
    return state.user !== null
  }
}

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}

export const actions = {
  setUser({ commit }, payload) {
    commit('setUser', payload)
  }
}
