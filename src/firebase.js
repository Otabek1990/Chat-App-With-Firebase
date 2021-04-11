import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCYQ_uYOrHl29LTBY3TI-bGKILCpUR-LIk",
  authDomain: "slack-clone-app-4be0d.firebaseapp.com",
  projectId: "slack-clone-app-4be0d",
  storageBucket: "slack-clone-app-4be0d.appspot.com",
  messagingSenderId: "291000384420",
  appId: "1:291000384420:web:9372bb53dc4900e30b5f31"
};
 export const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
const auth=firebase.auth();
//const provider=new firebase.auth.GoogleAuthProvider()

export {auth}
export default db;