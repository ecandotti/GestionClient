import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyB7a0TABhbqoKy40N7efCL-M_q6w2ITIP8",
    authDomain: "crm-project-1dc1c.firebaseapp.com",
    databaseURL: "https://crm-project-1dc1c.firebaseio.com",
    projectId: "crm-project-1dc1c",
    storageBucket: "crm-project-1dc1c.appspot.com",
    messagingSenderId: "649645424228",
    appId: "1:649645424228:web:d59109228907aaa669e971",
    measurementId: "G-NM6XQYVJX0"
}

firebase.initializeApp(config)

export default firebase
export const firestore = firebase.firestore()