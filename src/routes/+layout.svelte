<script>
    import "../app.pcss";

    import { onMount } from 'svelte';
   
  </script>
  
  <div id="default-layout">
 
    
    <div id="navbox">
      <img id="logo" src="/tuskylogo.png">
      <h1 id="nav-title">TUSKY TIME</h1>
      <a href="/announcement">Announcement</a>
    </div>
    
    <div id="app">
      <slot></slot>
    </div>
    
    <div id="footer">
      <p id="me">Made by David Macpherson, 875497@lcps.org</p>
      <a id="aboutbutton" href="/about">About</a>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSclrTR93zTJtpLnqpRWVL9fV6cSmPeo9C68mqWIkQpgO106Cw/viewform">Feedback</a>
    </div>
  </div>
 
<style>
    
</style>
  