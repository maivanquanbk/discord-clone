import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbpCmIhLqT--Egud50XgnPdw4Uire2Fcw",
  authDomain: "discord-clone-3ae31.firebaseapp.com",
  databaseURL: "https://discord-clone-3ae31.firebaseio.com",
  projectId: "discord-clone-3ae31",
  storageBucket: "discord-clone-3ae31.appspot.com",
  messagingSenderId: "413066989348",
  appId: "1:413066989348:web:8146db7fee644758276db1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
