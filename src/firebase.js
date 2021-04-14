import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBXyq7TlO7IDe1Z7anNM0Z-W-rz_8jwgoE",
    authDomain: "chat-alex-e8b44.firebaseapp.com",
    projectId: "chat-alex-e8b44",
    storageBucket: "chat-alex-e8b44.appspot.com",
    messagingSenderId: "394513631727",
    appId: "1:394513631727:web:93b323bab3307a91120e1a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider() //estas eligiendo google como tu proveedor de inicio de sesion

export {db, auth, provider}
