import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from "firebase/messaging";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDqVLf_nE15XdaWXbKGa9tP3yPRDS7ligg",
    authDomain: "frontend-e257b.firebaseapp.com",
    projectId: "frontend-e257b",
    storageBucket: "frontend-e257b.appspot.com",
    messagingSenderId: "943284013949",
    appId: "1:943284013949:web:54881d713a4697be3c5a14"
};

const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);
getToken(messaging, {
    vapidKey: 'BD0BMmfFw5ko-gIi7eimFXImFdbszeAxW2Nxj6Y7X7yDFyKtuqKoC5CymALsUxYu_USk-GcHR-CIfKh53KoL45U',
}).then((currentToken) => {
    if (currentToken) {
        console.log('current token for client: ', currentToken);
    } else {
        console.log('No registration token available. Request permission to generate one.');
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
});

export const db = getFirestore(app);
