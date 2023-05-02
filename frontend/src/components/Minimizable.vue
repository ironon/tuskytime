<script setup lang="ts">
    import {ref} from "vue"
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
            <button id="minimizebutton" @click="minimize">v</button>
            <div id="navbox" :style="minimized">
                
                <img src="/assets/tuskylogo.png"/>
                <h1 id="nav-title">TUSKY TIME</h1>
                <a class="nav-link" href="/">Home</a>
            
            </div>
            <div id="app">
                <slot/>
            </div>
            <div id="footer">
                <p>not affiliated with LCPS or Tuscarora but that'd be pretty cool if I was </p>
                <p>Made by David Macpherson, 875497@lcps.org</p>
                <a href="/coolpeople">cool people list</a>
            </div>
        </div>
</template>

<style scoped>
#minimizebutton {
    border: 0.1rem solid black;
    width: 2rem;
    height: 2rem;
    padding: 0;
    font-size: large;
    margin: 0;
    position: absolute;
    top: 0;
    right: 0;
    
   
}
</style>
