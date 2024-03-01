<script>
    import { isSignedIn } from "$lib/useFirebase";
    import "../app.pcss";
    // import "../style.css";
    import "../main.css"
    import { onMount } from 'svelte';
    onMount(() => {

      let signedIn = isSignedIn()
    })
  </script>
  
  <div id="default-layout">
 
    <div id="navbox">
      <img id="logo" src="/tuskylogo.png">
      <h1 id="nav-title">TUSKY TIME</h1>
      {#await signedIn}
        
      {:then signedInA} 
        {#if signedInA}
        <a href="/announcement">Announcement</a>
        {/if}
      {/await}
    </div>
    
    <div id="app">
    
      <slot></slot>
      <div id="footer">
        <p id="me">Made by David Macpherson, 875497@lcps.org</p>
        <a id="aboutbutton" href="/about">About</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSclrTR93zTJtpLnqpRWVL9fV6cSmPeo9C68mqWIkQpgO106Cw/viewform">Feedback</a>
      </div>
    </div>
    
  </div>
 
<style>
  #default-layout {
    overflow-y:hidden;
    display: flex;
    height: min-content;
    flex-direction: column;
    justify-content:start;
    height: 100%;
  }
  #footer {
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;
    margin-top: 5rem;
    background-color: var(--lighter-main);
    position:static;
  }
  
    #app {
      overflow-y:scroll;
      flex-shrink: 0;
      display: flex;
      padding-top: 4rem;
      justify-content: baseline;
      height: 100%;
      /* margin-top: 9%; */
    }
    #footer p, a {
      text-align: center;
      margin: 0;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      opacity: 0.6;
      /* position: fixed; */
      
    }
    #navbox {
    outline: 10px solid var(--main);
    width: 100%;
    height: 9%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: var(--light-main);
    align-items: center;
    /* background-color: beige; */
    /* position: static; */
    
}
#navbox img {
  max-width: 5%;
}
</style>
  