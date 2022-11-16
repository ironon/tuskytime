<script setup> 
    import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, ref as folder, set, onValue} from "firebase/database"
import { getAuth} from "firebase/auth";
import { use } from "h3";



const app = getApp()
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app)

const authenticated = ref("")
const loaded = getLoaded()

function getLoaded() {
    return true
}



</script>

<template>
    <div id="study" v-if="loaded">
        <p>TUSKYSTUDY TM</p>
    </div>
    <div id="study" v-else>
        <img id="loading-spinner" src="assets/loadingSpinner.webp"/>
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