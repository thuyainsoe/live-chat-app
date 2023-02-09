import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyANGRAcgvSQwhxNM9xBXHXbs5SBfe2XQwI",
    authDomain: "firevuejs-e5160.firebaseapp.com",
    databaseURL: "https://firevuejs-e5160-default-rtdb.firebaseio.com",
    projectId: "firevuejs-e5160",
    storageBucket: "firevuejs-e5160.appspot.com",
    messagingSenderId: "366132208827",
    appId: "1:366132208827:web:177177649e0eb6d5ab359e"
};

firebase.initializeApp(firebaseConfig)
let db=firebase.firestore();
let auth=firebase.auth();
let timestamp =firebase.firestore.FieldValue.serverTimestamp;

export {db,timestamp,auth}