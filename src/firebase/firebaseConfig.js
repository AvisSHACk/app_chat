// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore, addDoc, collection, setDoc, doc, getDoc, serverTimestamp, query, getDocs, where} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const getUserInfo = async (usuario) => {
    const docRef = doc(db, `usuarios/${usuario.uid}`);
    const docSnap = await getDoc(docRef);
    return docSnap;
}

const handleMessageSend = async (id, mensaje, userAmigo) => {
    await addDoc(collection(db, `chats/${id}/mensajes`), {
        mensaje: mensaje,
        email: userAmigo,
        timestamp: serverTimestamp()
    })
}

const getNameAmigo = async (email) => {
    let userAmigo = "";
    const q = query(collection(db, "usuarios"), where('email', '==', `${email}` ));
    const consulta = await getDocs(q);

    consulta.forEach((doc) => {
        userAmigo = doc.data();
    });

    return userAmigo;
}

const addChat = (users, userAmigo) => {
    console.log(users, userAmigo)
    addDoc(collection(db, "chats"), {
        users: users,
        userAmigo: userAmigo
    })
}


export {
    auth,
    db,
    createUserWithEmailAndPassword,
    getFirestore, 
    addDoc, 
    collection,
    setDoc, 
    doc,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    getUserInfo,
    handleMessageSend,
    getNameAmigo,
    addChat
}