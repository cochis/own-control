import firebase from 'firebase'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyB5QH0SljHOjK6cjb7jfFiZINJ7fCvGCt0",
    authDomain: "owncontrol-9f50a.firebaseapp.com",
    projectId: "owncontrol-9f50a",
    storageBucket: "owncontrol-9f50a.appspot.com",
    messagingSenderId: "1095207561194",
    appId: "1:1095207561194:web:9482ea010231b0a9203493",
    measurementId: "G-TBEQ3PKRH4"
};

firebase.initializeApp(firebaseConfig);

export default { firebase }