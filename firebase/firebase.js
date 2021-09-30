import * as firebase from "firebase"

import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCj07yQ4tdBzZMO1ESd8-NXbHspFdRW3Ds",
    authDomain: "codetrain-af20a.firebaseapp.com",
    projectId: "codetrain-af20a",
    storageBucket: "codetrain-af20a.appspot.com",
    messagingSenderId: "344291280956",
    appId: "1:344291280956:web:2d7fa51ae657838c475b39"
};
  
firebase.initializeApp(firebaseConfig)

export default firebase;