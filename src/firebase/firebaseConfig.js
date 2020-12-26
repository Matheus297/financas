import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyBPbUbtw2PVvwt-xJoIG61PdRLyvN7q4k8",
    authDomain: "financas-af7c2.firebaseapp.com",
    projectId: "financas-af7c2",
    storageBucket: "financas-af7c2.appspot.com",
    messagingSenderId: "456673391351",
    appId: "1:456673391351:web:a51b24c4875fa5c27e19f2",
    measurementId: "G-SM7HY15EBK"
  };
  // Initialize Firebase
  if(!firebase.length){

      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;