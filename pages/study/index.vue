<script setup> 
import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, ref as folder, set, onValue} from "firebase/database"
import { getAuth} from "firebase/auth";

setTimeout(() => {
    navigateTo("/")
}, 2000)





</script>

<template>
    <div id="study">
        <h1>you shouldnt be seeing this page</h1>
        <p>frick i messed up</p> 
        <p>move along you never saw this</p>
    </div>
</template>

<style scoped>
    #study {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
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