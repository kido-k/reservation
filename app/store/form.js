export const state = () => ({
  form: {
    main: {
      title: '',
      detail: ''
    },
    name: {
      displayName: true,
      familyNameLabel: '姓',
      familyNamePlaceHolder: '田中',
      firstNameLabel: '名',
      firstNamePlaceHolder: '太郎'
    },
    nameKana: {
      displayNameKana: true,
      familyNameLabel: 'セイ',
      familyNamePlaceHolder: 'タナカ',
      firstNameLabel: 'メイ',
      firstNamePlaceHolder: 'タロウ'
    },
    address: {
      displayAddress: true,
      zipCode: '',
      prefecture: '',
      city: '',
      building: ''
    },
    telephone: {
      displayTelephone: true,
      telephone: ''
    },
    mail: {
      displayMail: true,
      mailAddress: ''
    },
    finish: {
      finishMessage: '',
      finishButton: '',
      finishUrl: ''
    }
  }
})

export const getters = {
  getFormData(state) {
    return state.form
  },
  getMainData(state) {
    return state.form.main
  },
  getNameData(state) {
    return state.form.name
  },
  getNameKanaData(state) {
    return state.form.nameKana
  },
  getAddressData(state) {
    return state.form.address
  },
  getTelephoneData(state) {
    return state.form.telephone
  },
  getMailData(state) {
    return state.form.mail
  },
  getFinishData(state) {
    return state.form.finish
  }
}

export const mutations = {}

export const actions = {}
