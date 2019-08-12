export const state = () => ({
  formId: '',
  formData: {}
})

export const getters = {
  getFormId(state) {
    return state.formId
  },
  getFormData(state) {
    return state.formData
  },
  getMainData(state) {
    return state.formData.main
  },
  getNameData(state) {
    return state.formData.name
  },
  getNameKanaData(state) {
    return state.formData.nameKana
  },
  getAddressData(state) {
    return state.formData.address
  },
  getTelephoneData(state) {
    return state.formData.telephone
  },
  getMailData(state) {
    return state.formData.mail
  },
  getFinishData(state) {
    return state.formData.finish
  }
}

export const mutations = {
  setFormId(state, formId) {
    state.formId = formId
  },
  setFormData(state, payload) {
    state.formData = payload.content
  }
}

export const actions = {}
