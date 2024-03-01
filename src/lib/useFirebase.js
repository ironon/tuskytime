
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {nanoid} from "nanoid"
import { getAnalytics } from "firebase/analytics";
import { getDatabase, get, child, ref, set, onValue, limitToFirst, query } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"

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
    console.log("dataaa")
    const postsRef = ref(db, 'posts');
    const t_query = await query(postsRef, limitToFirst(amount))
    let data = await get(t_query)
    let value = data.val()
    if (value == null) {
        return []
    }
    value = Object.values(value)

    console.log(value)
    return value
}

/**
 * @param {string} email
 */
export async function checkWhitelisted(email) {

    //   const userRef = ref(database, "whitelist/"+btoa(email))  
    let data = await get(child(dbRef, `whitelist/${btao(email)}`))
    if (data.exists()) {
        return true
    } else {
        throw Error("You are not on the whitelist!")
    }

}
// Placeholder function for login
/**
 * @param {string} email
 * @param {string} password
 */
export async function isSignedIn() {
    return auth.currentUser != null
}
/**
 * @param {string} title
 * @param {string} html
 */
export async function postAnnouncement(title, html) {
    let id = nanoid()
    const postsRef = ref(database, `posts/${id}`);
    
    // Create an object with the provided strings
    const postData = {
        "title": title,
        "html": html,
        "id": id,
        "author": auth.currentUser?.email,
        "author_name": auth.currentUser?.displayName,
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
 * @param {string} id
 * 
 */
export async function getPost(id) {
    let loc = ref(database, `posts/${id}`)
    let data = await (await get(loc)).val()
    return data
    
}
/**
 * @param {string} email
 * @param {string} password
 */
export async function login(email, password) {
    // Check if the user exists in the database
    let data = await signInWithEmailAndPassword(auth, email, password)
    let user = data.user


    //   if (!userData) {
    //     throw new Error('User not found');
    //   }

    //   // Authenticate with Firebase Auth using the provided email and password

}
// Placeholder function for signup, replace with actual implementation using Firebase
/**
* @param {string} email
* @param {string} password
*/
export async function signup(email, password) {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}
