
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpbN0umdoCj78k0uNWLXcA4-9AlLfVTY8",
  authDomain: "my-app-97ced.firebaseapp.com",
  projectId: "my-app-97ced",
  storageBucket: "my-app-97ced.appspot.com",
  messagingSenderId: "213992182139",
  appId: "1:213992182139:web:d565ee505523a1a34cedde",
  measurementId: "G-S3T74TGV2Y"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
