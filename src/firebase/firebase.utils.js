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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error)
    }
  }
  return userRef
}

export const addCollectionsAndItems = async (CollectionKey, objectToAdd) => {
  const CollectionRef = firestore.collection(CollectionKey)

  const batch = firestore.batch()

  objectToAdd.forEach((obj) => {
    const newRef = CollectionRef.doc()
    batch.set(newRef, obj)
  })
  return await batch.commit()
}

export const convertCollectionsSnapshortToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title),
      id: doc.id,
      title,
      items,
    }
  })
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
