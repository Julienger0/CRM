import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config={
    apiKey: "AIzaSyCey_v71gUqwxbC6Mb47-ZdB6tPHHgxwRQ",
    authDomain: "crm-linkedin-e8177.firebaseapp.com",
    projectId: "crm-linkedin-e8177",
    storageBucket: "crm-linkedin-e8177.appspot.com",
    messagingSenderId: "233163257383",
    appId: "1:233163257383:web:e39f7c840d22d28248c002",
    measurementId: "${config.measurementId}"
}

firebase.initializeApp(config)

export default firebase