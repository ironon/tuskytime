
import { getAuth, GoogleAuthProvider, signInWithPopup, Auth, signOut} from "firebase/auth";
import { }
const provider = new GoogleAuthProvider();



export const logOut = () => {
    const auth = getAuth()
    signOut(auth).then(() => {
        navigateTo("/study")
    })
}

export const joinUser = () => {
    const auth = getAuth()
    return signInWithPopup(auth, provider).then(() => {
        return auth
    })
}


export const isRegisteredUser = (authIns: Auth) => {

}