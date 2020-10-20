// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBibdmuIhv9q9hLzWPT0QiUYPywnnkp4FM",
    authDomain: "e-clone-project.firebaseapp.com",
    databaseURL: "https://e-clone-project.firebaseio.com",
    projectId: "e-clone-project",
    storageBucket: "e-clone-project.appspot.com",
    messagingSenderId: "1020709818359",
    appId: "1:1020709818359:web:b0642f0e1fe9b3755068f2",
    measurementId: "G-NY8RE4WLRC"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebaseApp.auth()

  export {auth,db}