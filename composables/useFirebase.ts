
import { getAuth, GoogleAuthProvider, signInWithPopup, Auth, signOut, User} from "firebase/auth";
import { collection, doc, getDoc, setDoc, getFirestore} from "firebase/firestore"
import { initializeApp, getApp } from '@firebase/app';
const provider = new GoogleAuthProvider();
const firebaseConfig = {
    apiKey: "AIzaSyA62gZmAbAqVdl7ySW9tZlKvIDUBi71ydQ",
    authDomain: "tuskytime.firebaseapp.com",
    databaseURL: "https://tuskytime-default-rtdb.firebaseio.com",
    projectId: "tuskytime",
    storageBucket: "tuskytime.appspot.com",
    messagingSenderId: "462748644600",
    appId: "1:462748644600:web:77801fadbdfac90f37f70d",
    measurementId: "G-RHMV5QC0XJ"
};
const app = initializeApp(firebaseConfig)


export const logOut = async () => {
    const auth = getAuth()
    await signOut(auth)
    return
}

export const joinUser = () => {
    const auth = getAuth()
    return signInWithPopup(auth, provider).then(() => {
        return auth
    })
}

export const chooseStudyPage = async () => {
    const app = getFirebaseApp()
    const auth = getAuth(app)
    const authenticated = await isRegisteredAuth(auth)
    if (authenticated == true) {
        return "/study/home"
    } else {
        return "/study/about"
    }

}

const pwn = async (uid) => {
    const auth = getAuth()
    console.log("Current user is " + auth.name)
    console.log("attempting to hack " + uid)
    const db = getFirestore()
    const userDataRef = doc(db, "users", uid)
    await setDoc(userDataRef, {pwned: "haha noob"})
 
}
//@ts-ignore
window.pwn = pwn

export const sendCreateAccount = async (info) => {
    const auth = getAuth()
    const db = getFirestore()
    const userDataRef = doc(db, "users", auth.currentUser.uid)
    await setDoc(userDataRef, info)
    
}
export const getFirebaseApp = () => {
    return getApp()
}
export const isLoggedIn = async (authIns) => {
    if (authIns.currentUser == null) {
        console.log("Current user is null!")
        return false
    }
    return true
}
export const repeatSkullEmojis = () => {
    const repeats = Math.floor(Math.random() * 15)
    let skullEmoji = "💀"
    let returnedString = ""
    for (let i = 0; i < repeats; i++) {
        returnedString += skullEmoji
    }
    return returnedString
}
export const isRegisteredUser = async (user: User) => {
    const db = getFirestore()
    console.log("Getting user data!")
    if (user == null) {
        console.warn("User is null! You are either logged out, or something TERRIBLE has happened!" + repeatSkullEmojis())
        return false
    }
  
    const userDataRef = doc(db, "users", user.uid)
    console .log ("Got user data!")
    const userData = (await getDoc(userDataRef)).data()
    if (userData === undefined) {
        console.log("Userdata is undefined!")
        return false
    }
    return true
}

export const isRegisteredAuth = async (authIns: Auth) => {
    return isRegisteredUser(authIns.currentUser)
}