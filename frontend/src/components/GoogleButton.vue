<script setup lang="ts">
    const emits = defineEmits(["sign-in"])
   
</script>
<template>
    <div id="sign-in-google">
        <img src="assets/googlelogo.png"/>
        <button @click="$emit('sign-in')">
            sign in with google
        </button>
    </div>
</template>

<style scoped>
    #sign-in-google {
        width: 12rem;
        height: 3rem;
        display: flex;
        border: 2px solid black;
        border-radius: 0px;
        background-color: aliceblue;
        box-shadow: 0.1rem 0.1rem black;
    }
    #sign-in-google:active {
        box-shadow: 0rem 0rem black;
        margin-top: 0.1rem;
        margin-left: 0.1rem;
    }
    #sign-in-google button {
        
        width: 100%;
        height: 100%;
        background-color: rgba(255, 0, 0, 0);
        border: 0;
        
    }
    #sign-in-google img {
        height: 100%;
        
    }
</style>