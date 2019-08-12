export default {
  main: {
    title: '',
    detail: ''
  },
  name: {
    displayName: true,
    familyNameLabel: '姓',
    familyNamePlaceHolder: '田中',
    familyNameRequired: true,
    firstNameLabel: '名',
    firstNamePlaceHolder: '太郎',
    firstNameRequired: true
  },
  nameKana: {
    displayNameKana: true,
    familyNameKanaLabel: 'セイ',
    familyNameKanaPlaceHolder: 'タナカ',
    familyNameKanaRequired: true,
    firstNameKanaLabel: 'メイ',
    firstNameKanaPlaceHolder: 'タロウ',
    firstNameKanaRequired: true
  },
  address: {
    displayAddress: true,
    requiredAddress: true,
    zipCodePlaceHolder: '',
    prefecturePlaceHolder: '',
    cityPlaceHolder: '',
    buildingPlaceHolder: ''
  },
  telephone: {
    displayTelephone: true,
    telephonePlaceHolder: '',
    requiredTelephone: true
  },
  mail: {
    displayMail: true,
    mailAddressPlaceHolder: '',
    requiredMail: true
  },
  finish: {
    finishMessage: '',
    finishButton: '送信',
    finishUrl: ''
  }
}
