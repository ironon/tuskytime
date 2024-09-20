
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {nanoid} from "nanoid"
import { getAnalytics } from "firebase/analytics";
import { getDatabase, get, child, ref, set, onValue, limitToFirst, query, limitToLast } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, setPersistence, signOut, browserLocalPersistence, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app)
const dbRef = ref(database)
const auth = getAuth(app)

let btao = window.btoa



/**
 * @param {number} amount
 */
export async function getPosts(amount) {
    const db = getDatabase();
    // console.log("dataaa")
    const postsRef = ref(db, 'posts');
    const t_query = await query(postsRef, limitToLast(amount))
    let data = await get(t_query)
    let value = data.val()
    if (value == null) {
        return []
    }
    value = Object.values(value)
    // value = value.reverse()
    // console.log(value)
    return value
}

/**
 * @param {string} email
 */
export async function checkWhitelisted(email) {


    let uuid = (await get(child(dbRef, `email/${btoa(email)}`))).val()
    console.log(uuid)
    if (!uuid) {
        throw Error("You are not on the whitelist!")
    }
    return true
 

}

/**
 * @param {string} email
 */
export async function userForgotPassword(email) {
    await sendPasswordResetEmail(getAuth(), email)
}
// Placeholder function for login
/**
 * @param {string} email
 * @param {string} password
 */
export async function isSignedIn() {
    // let auth = getAuth()/
    return await getUser() != null
}

/**
 * @param {string} title
 * @param {string} html
 * @param {string} id
 */
async function modifyAnnoucement(id, title, html) {
    const postsRef = ref(database, `posts/${id}`);
    let userData = await getUserData()
    
    // Create an object with the provided strings
    const postData = {
        "title": title,
        "html": html,
        "id": id,
        "author": auth.currentUser?.email,
        "base64": btao(auth.currentUser?.email),
        "author_name": userData.name,
        "author_id": auth.currentUser?.uid,
        "date": Date.now()

    };
    // Push the data into the Realtime Database under /posts
    set(postsRef, postData)
        .then(() => {
            console.log('Data successfully written to the database.');
        })
        .catch((error) => {
            console.error('Error writing data to the database: ', error);
        });
}
/**
 * @param {string} title
 * @param {string} html
 */
export async function postAnnouncement(title, html) {
    let id = nanoid()
    await modifyAnnoucement(id, title, html)
}

/**
 * @param {any} id
 * @param {any} title
 * @param {any} html
 */
export async function editAnnouncement(id, title, html) {
    await modifyAnnoucement(id, title, html)
}
/**
 * @param {string} id
 * 
 */
export async function getPost(id) {
    let loc = ref(database, `posts/${id}`)
    let data = await (await get(loc)).val()
    return data
    
}
/**
 * @param {any} id
 */
export async function deletePost(id) {
    const postsRef = ref(database, `posts/${id}`);
    
    // Create an object with the provided strings
    const postData = null

    // Push the data into the Realtime Database under /posts
    await set(postsRef, postData)
        .then(() => {
            console.log('Data successfully deleted from the database.');
        })
        .catch((error) => {
            console.error('Error deleting data to the database: ', error);
        });
}
export async function getUserData() {
    let user = await getUser()
    let loc = ref(database, `users/${user.uid}`)
    let data = await (await get(loc)).val()
    return data 
}
export async function getUser() { //chatgpt wizardry
    return new Promise((resolve, reject) => {
      const unsubscribe = getAuth().onAuthStateChanged((user) => {
        unsubscribe(); // Unsubscribe after getting the user state
        resolve(user); 
      }, (error) => {
        reject(error);
      });
    });
  }
/**
 * @param {string} email
 * @param {string} password
 */
export async function login(email, password) {
    // Check if the user exists in the database
    await setPersistence(auth, browserLocalPersistence)
    let data = await signInWithEmailAndPassword(auth, email, password)
    let user = data.user
    console.log(JSON.parse(JSON.stringify(user)))
    //@ts-ignore
 
    console.log(await isSignedIn())
    

    //   if (!userData) {
    //     throw new Error('User not found');
    //   }

    //   // Authenticate with Firebase Auth using the provided email and password

}
// Placeholder function for signup, replace with actual implementation using Firebase
/**
 * @param {string} email
 * @param {string} password
 * @param {string} name
 */
export async function signup(email, password, name) {

    const auth = getAuth();
    
    console.log("signingin up")
    let userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    let database = getDatabase(app)
    console.log(user.uid)
    const userRef = ref(database, `users/${user.uid}`);
        // Create an object with the                 provided strings
    const userData = {
        "name": name

    };
    
    await set(userRef, userData)
    await sendEmailVerification(user)
    // ...
    
      
}

export async function realSignOut() {
    await signOut(getAuth())
}