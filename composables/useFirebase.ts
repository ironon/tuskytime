
import { getAuth, GoogleAuthProvider, signInWithPopup, Auth, signOut} from "firebase/auth";
import { collection, doc, getDoc, setDoc, getFirestore} from "firebase/firestore"

const provider = new GoogleAuthProvider();



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
export const isRegisteredUser = async (authIns: Auth) => {
    if (authIns.currentUser == null) {
        console.log("Current user is null!")
        return false
    }
    console.log(authIns)
    const db = getFirestore()
    console.log("Getting user data!")
    const userDataRef = doc(db, "users", authIns.currentUser.uid)
    console .log ("Got user data!")
    const userData = (await getDoc(userDataRef)).data()
    console.log("Got the user data for real this time!")
    if (userData === undefined) {
        console.log("Userdata is undefined!")
        return false
    }
    return true
}