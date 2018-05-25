
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCOsatP1Xz-JRUFVhyR4e52RN7X7tCzxPg",
    authDomain: "loot-b9134.firebaseapp.com",
    databaseURL: "https://loot-b9134.firebaseio.com",
    projectId: "loot-b9134",
    storageBucket: "loot-b9134.appspot.com",
    messagingSenderId: "356138592317"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
export default firebase;