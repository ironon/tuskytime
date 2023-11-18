<script setup lang="ts">
import { onMounted, ref } from 'vue';

    let props = defineProps(["ad"])
    let newad = ref("")
    function goToDonuts() {
        let link = "/donuts"
        // console.log(newad.value[0].includes("teacher"))
        if (newad.value.includes("teacher")) {
            link = "/donuts_t"
        }
        window.location.href = link;
    }

    onMounted(() => {

        newad.value = props.ad()[0]
        
    })
    

</script>

<template>
    <div id="amazingbestadvert">
        <img v-on:click="goToDonuts" :src="'/assets/' + newad">
    </div>
</template>


