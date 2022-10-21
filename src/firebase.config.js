import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDoCcEayWK822bJe-Q0scl5cx72aH5NKk0",
    authDomain: "time-o-clock.firebaseapp.com",
    databaseURL: "https://time-o-clock-default-rtdb.firebaseio.com",
    projectId: "time-o-clock",
    storageBucket: "time-o-clock.appspot.com",
    messagingSenderId: "889997014798",
    appId: "1:889997014798:web:6d18c347a27c95e664c95f",
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };