<script setup>
    var offsetV = useState(() => 0)
    function mousemove(event) {
        offsetV.value = event.x
        console.log(offsetV.value)
    }
    const css = computed(() => {
        const newVal = 'left: ' + (offsetV.value) + 'px'
        return newVal
    })
</script>


,<template>
    <div id="default-layout">
        <div id="navbox">
            <NuxtLink class="coming-soon">
                <p @mousemove="mousemove">Study</p>
            </NuxtLink>
            <img src="/assets/tuskylogo.png"/>
            <h1 id="nav-title">TUSKY TIME</h1>
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
            
            <div class="tooltip" :style="css">
                <h1>coming soon</h1>
            
                <p id="small-text">maybe...</p>
                <p id="smaller-text">if i feel like adding it</p>
            </div>
        </div>
        <div id="app">
            <slot/>
        </div>
        <div id="footer">
            <p>not affiliated with LCPS or Tuscarora but that'd be pretty cool if I was </p>
            <p>Made by 875497@lcps.org</p>
        </div>
    </div>
</template>

<style scoped>
    #default-layout {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    #navbox {
        outline: 10px solid var(--main);
        width: 100%;
        height: 10%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: var(--light-main);
        align-items: center;
        
    }
    #navbox img {
        max-height: 5rem;
    }
    #small-text {
        font-size: small;
    }
    #smaller-text {
        font-size: xx-small;
    }
    #nav-title {
        margin-left: 1ch;
        font-size: min(2.5rem, 8vmin);
       
        text-align: center;
        margin: 0;
    }
    .nav-link {
        font-size: larger;
        margin-left: 1ch;
        color: var(--dark-main);
        text-decoration: underline;;
    }
    .coming-soon {
        font-size: larger;
        margin-left: 1ch;
        color: var(--dark-main);
        text-decoration: underline;
        user-select:none;

    }
    .tooltip {
        visibility: hidden;
        position: absolute;
        border: 2px solid black;
        background-color: var(--light-main);
        top: 4rem;
        left: 0rem;
        display: none;
    }
    .coming-soon:hover ~ .tooltip {
        visibility: visible;
        display: block;
        position: absolute;
        
    }
    #app {
        background-color: var(--lighter-main);
        width: 100%;
        height: 90%;
        overflow-y: scroll;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    #footer {
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        width: 100%;
    }
    #footer p {
        color: var(--light-main);
        font-size: small;
    }
</style>