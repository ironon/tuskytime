<script setup> 
    import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, ref as folder, set, onValue} from "firebase/database"
import { getAuth} from "firebase/auth";
import { use } from "h3";
const firebaseConfig = {
        apiKey: "AIzaSyA62gZmAbAqVdl7ySW9tZlKvIDUBi71ydQ",
        authDomain: "tuskytime.firebaseapp.com",
        projectId: "tuskytime",
        storageBucket: "tuskytime.appspot.com",
        messagingSenderId: "462748644600",
        appId: "1:462748644600:web:77801fadbdfac90f37f70d",
        measurementId: "G-RHMV5QC0XJ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase()
const authenticated = ref("")
auth.onAuthStateChanged(user => {
  
    if (user.auth == null) {
        authenticated.value = "unknown"
        return
    }
    
    const userdata = folder(database, `users/${user.uid}`)

    console.log("getting data")
    onValue(userdata, (snapshot) => {
        console.log("accessed snapshot!")
        const data = snapshot.val()
        console.log(data)
    })
   
})

const isNewAccount = computed(() => {
    
})


</script>

<template>
    <div id="chat" v-if="authenticated.username != null">
    
        <div v-if="isNewAccount" id="account-creation">
            <p>accoutn creation</p>
        </div>
        <Chat v-else></Chat>
    </div>
    <div id="chat" v-else-if="authenticated == 'unknown'">
        <SignIn></SignIn>
    </div>
    <div id="chat" v-else>
        <img id="loading-spinner" src="assets/loadingSpinner.webp"/>
    </div>
</template>

<style scoped>
    #chat {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #loading-spinner {
        width: 10%;
        animation: loading-spinner 1s infinite linear;
        /* animation: name duration timing-function delay iteration-count direction fill-mode; */
    }
    @keyframes loading-spinner {
        0% {
            transform: rotate(-360deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
</style>