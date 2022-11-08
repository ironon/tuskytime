<script setup lang="ts">
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
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
    
</script>

<template>
    <TuskyTime></TuskyTime>
</template>