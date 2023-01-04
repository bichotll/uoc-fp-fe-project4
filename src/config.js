import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { onBackgroundMessage } from "firebase/messaging/sw";
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore/lite';

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
}).then(async (currentToken) => {
    console.log('currentToken', currentToken)

    if (currentToken) {
        const db = getFirestore(app);

        const tokensCollection = collection(db, 'tokens')

        const q = query(collection(db, "tokens"), where("tokenId", "==", currentToken));

        const querySnapshot = await getDocs(q);

        const currentTokenExists = querySnapshot.docs.length > 0;

        if (!currentTokenExists) {
            addDoc(tokensCollection, {
                tokenId: currentToken
            })
        }
    } else {
        console.log('No registration token available. Request permission to generate one.');
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
});

onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    alert(payload.notification.title);
});

export const db = getFirestore(app);
