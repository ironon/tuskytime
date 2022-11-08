<template>
    <div id="default-layout">
        <div id="navbox">
            <img src="/assets/tuskylogo.png"/>
            <h1 id="nav-title">TUSCARORA TIME</h1>
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
    
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
    }
    #navbox {
        outline: 10px solid var(--main);
        width: 100%;
        height: 10%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: var(--light-main);
        align-items: center;
        margin: 0;
    }
    #navbox img {
        max-height: 5rem;
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
        color: var(--dark-main)
    }
    #app {
        background-color: var(--lighter-main);
        width: 100%;
        height: 90%;
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