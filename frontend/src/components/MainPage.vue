<script setup lang="ts">
 
    import { getAnalytics } from "firebase/analytics";
    import {initializeApp} from "firebase/app"
    import TuskyTime from "./TuskyTime.vue";
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

    const analytics = getAnalytics(app);
    
</script>

<template>
    <div id="main-page">
        <TuskyTime></TuskyTime>
    </div>
</template>

<style scoped>
    #main-page {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>