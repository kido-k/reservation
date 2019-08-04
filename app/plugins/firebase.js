import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBiTy--Wcv8CZt3H2S5z1HB2LHEjPbcBIQ',
    authDomain: 'reservertion-f469d.firebaseapp.com',
    databaseURL: 'https://reservertion-f469d.firebaseio.com',
    projectId: 'reservertion-f469d',
    storageBucket: '',
    messagingSenderId: '1011090924587'
  })
}

export default firebase
