<script setup lang="ts">
    import { getApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    const app = getApp();
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