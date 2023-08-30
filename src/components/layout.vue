<script setup lang="ts">
    import {ref} from "vue"
    const stupid_props = defineProps(["minimizable"]) // im about to smash my head through the entirity of jupiter. This line throws an undiagnosable error if you use let, but not with const. I'm literally about to explode.
    let minimizable = stupid_props.minimizable
    let minimized_style = "display: none"
    let maximized_style = ""
    let minimized = ref(maximized_style)
    function minimize() {
        console.log("minimized")
        if (minimized.value == minimized_style) {
            minimized.value = maximized_style
        } else {
            minimized.value = minimized_style
        }
    }
  
</script>

<template>
       
        <div id="default-layout">
            <button id="minimizebutton" @click="minimize" v-if="minimizable">v</button>
    
            <div id="navbox" :style="minimized">
                <!-- <a class="nav-link" href="/study">Study</a> -->
                <img id="logo" src="/assets/tuskylogo.png"/>
                <h1 id="nav-title">TUSKY TIME</h1>
                <a class="nav-link" href="/">Home</a>
            
            </div>
            <div id="app">
                <slot></slot>
            </div>
            <div id="footer">
                
                <p>Made by David Macpherson, 875497@lcps.org</p>
                <a href="/coolpeople">cool people list</a>
            </div>
        </div>
</template>


<style scoped>
    #logo {
        height: 80%;
    }
</style>