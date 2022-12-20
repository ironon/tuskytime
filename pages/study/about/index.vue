<script setup lang="ts">

    // const auth = await joinUser()
    // const isRegistered = await isRegisteredAuth(auth)
    // if (isRegistered) {
    //     navigateTo("/study/home")
    // }
    var onJoinButtonClick = async (event: MouseEvent) => {
        console.log("Crunching numbers...")
        const auth = await joinUser()
        console.log("Joined user, seeing if registered...")
        const isRegistered = await isRegisteredAuth(auth)
        console.log(isRegistered)
        if (isRegistered) {
            console.log("User is signed in, navigating...")
            navigateTo("/study/home")
        } else {
            console.log("user is NOT signed in, sending him to the shadow realm...")
            navigateTo("/study/join")
        }
        return event
    }
</script>

<template>
    <div id="about">
        <h1>ABOUT PAGE</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        <button id="join-button" @click="onJoinButtonClick">JOIN</button>
    </div>
</template>


<style scoped>
    #about {
        width: 70%;
        height: 90%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    #join-button {
        width: 6rem;
        height: 4rem;
        font-size: large;
    }
</style>