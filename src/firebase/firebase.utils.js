import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDLs45CTwCIhDeMw6ezpjx4R6yMOJYTKEc',
  authDomain: 'crwn-db-6fd18.firebaseapp.com',
  projectId: 'crwn-db-6fd18',
  storageBucket: 'crwn-db-6fd18.appspot.com',
  messagingSenderId: '582005404579',
  appId: '1:582005404579:web:0fcc382fd16498d47ca016',
  measurementId: 'G-BW80HKRZXF',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
