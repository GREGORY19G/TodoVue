import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDUNKKnZwQ3BPSo16Su9iAqRROmKQNhbm0",
    authDomain: "vue-crud-8d64a.firebaseapp.com",
    databaseURL: "https://vue-crud-8d64a.firebaseio.com",
    projectId: "vue-crud-8d64a",
    storageBucket: "vue-crud-8d64a.appspot.com",
    messagingSenderId: "517705956494",
    appId: "1:517705956494:web:52230e0e04cea88a459ddf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db};
