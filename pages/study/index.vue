<script setup> 
import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, ref as folder, set, onValue} from "firebase/database"
import { getAuth} from "firebase/auth";
import { use } from "h3";
//factor this page out entirely


const app = getApp()
const auth = getAuth(app)
console.log("Getting auth...")
console.log(auth)

auth.onAuthStateChanged((user) => direct);
async function direct(auth) {
    console.log("Redirecting....")
    const authenticated = await isRegisteredUser(auth)
    console.log("Got auth!")
    if (authenticated == true) {
        await navigateTo({
            path: "study/home"
        })
    } else {
        await navigateTo({
            path: "study/about"
        })
    }

}





</script>

<template>
    <div id="study">
        <p>Please wait...</p>
    </div>
</template>

<style scoped>
    #study {
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