import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR-IYNMHQWp3JpxC-fzYrtARhcKNqqCIM",
  authDomain: "software-pizzaria.firebaseapp.com",
  projectId: "software-pizzaria",
  storageBucket: "software-pizzaria.appspot.com",
  messagingSenderId: "374054670729",
  appId: "1:374054670729:web:7224a7cda50b6eebbf5158",
  measurementId: "G-4JLNF58CGE",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
