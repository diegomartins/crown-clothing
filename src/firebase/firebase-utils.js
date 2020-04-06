import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBp17idzxQUhaA8_YxTcVKtisibQTxChcQ",
    authDomain: "crown-db-c37a4.firebaseapp.com",
    databaseURL: "https://crown-db-c37a4.firebaseio.com",
    projectId: "crown-db-c37a4",
    storageBucket: "crown-db-c37a4.appspot.com",
    messagingSenderId: "8265432058",
    appId: "1:8265432058:web:c31dbd07a26fa243a08243",
    measurementId: "G-63KMRVKGHZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
