<script setup lang="ts">
    const props = defineProps(['text', "src"])
</script>

<template>
    <button class="bigbluebutton">
        <img id="bigbluebuttonimage" :src="props.src"/>
        <p>{{props.text}}</p>
       
    </button>
</template>

<style scoped>
    .bigbluebutton {
        width: 45vmin;
        height: 45vmin;
        margin: 2vmin;
        font-size: 10vmin;
        border: 1vmin solid var(--main);
        border-radius: 1rem;
        background-color: var(--mainer);
        font-size: 2rem;
        color: var(--main);
    }
    #bigbluebuttonimage {
        width: 100%;
    }
</style>