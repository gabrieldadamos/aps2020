import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBKhQXZunAVRVjDX1wk5_dHMDgJLUsHf_E",
  authDomain: "unipaps-16c9a.firebaseapp.com",
  databaseURL: "https://unipaps-16c9a.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth