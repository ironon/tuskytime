<script>
    // import { isSignedIn } from "$lib/useFirebase";
    import "../app.pcss";
    import "../assets/style.css";
    import "../main.css"
    import { onMount } from 'svelte';
    /**
     * @type {null|boolean}
     */
    let signedIn = null
    onMount(async () => {
      let firebase = await import("$lib/useFirebase")
      signedIn = (await firebase.getUser()) != null
    })
  </script>
  
  <div id="default-layout">
 
    <div id="navbox">
      {#if signedIn}
      <a href="/signout">Sign Out</a>
      {/if}
      <img id="logo" on:click={() => window.location.href="/"} src="/tuskylogo.png">
      <!-- <a href="/" id="nav-title">TUSKY TIME</a> -->
      {#if signedIn != null}
        
      {#await signedIn}
        
      {:then signedInA} 
        {#if signedInA}
        <a href="/announcement">Announcement</a>
        {/if}
      {/await}
      {/if}
    </div>
    
    <div id="app">
    
      <slot></slot>
      <div id="footer">
        <p id="me">Made by David Macpherson, 875497@lcps.org</p>
        <a id="aboutbutton" href="/about">About</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSclrTR93zTJtpLnqpRWVL9fV6cSmPeo9C68mqWIkQpgO106Cw/viewform">Feedback</a>
        <a href="/coolpeople">Credits</a>
        <a href="/links">Other websites</a>
      </div>
    </div>
    
  </div>
 
<style>
  #default-layout {
    overflow-y:scroll;
    display: flex;
    height: min-content;
    flex-direction: column;
    justify-content:start;
    height: 100%;
  }
  #nav-title {
    font-weight: bold;
    opacity: 1;
    color: black;
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
      justify-content: space-between;
   
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
#navbox a{
  min-width: 10rem;
  font-size:larger;
}

#navbox img {
  max-width: 5%;
}
@media only screen and (max-width: 500px) {
  #navbox a {
    display: none;
  }
  #navbox img {
    display: flex;
    aspect-ratio: 1;
    /* width: 20vw; */
    max-width: max-content;
    height: 20vw;
  }
  #footer {
    display: block;
    justify-content: center;
    /* margin-top: 5rem; */
  }
  #footer a {
    margin-right: 20px;
  }

}
</style>
  