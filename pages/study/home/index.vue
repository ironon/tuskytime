<script setup lang="ts">

    const onLogOut = async (event: MouseEvent) => {
        await logOut()
        navigateTo("/study")
        return event
    }
</script>

<template>
    <div id="home">
        <h1>  HOME PAGE</h1>
        <p> GOOD JOB YOU GOT HERE </p>
        <button @click="onLogOut">log out</button>
    </div>
</template>

<style scoped>
     #home {
        width: 70%;
        height: 90%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>