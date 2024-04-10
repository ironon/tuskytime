<script>
    import { redirect } from "@sveltejs/kit";
  import { onMount } from "svelte";
  // import { login, signup } from '../../lib/useFirebase'; // Importing placeholder methods
  /**
   * @type {any}
   */
  let firebase;
  let getFirebase = () => {
    return firebase;
  };
  onMount(async () => {
    firebase = await import("../../lib/useFirebase");
    
    if (await firebase.getUser() != null) {
      window.location.href = "/announcement"
    }
  });
  let email = "";
  let name = ""
  let password = "";
  let isLogin = false;
  let whitelisted = false
  let error = "";
  let userForgotPassword = () => {
    firebase.userForgotPassword(email)
    error = "A password reset email has been sent. It will take anywhere from 1-10 minutes to show up."
  }
  let emailRegex =
    /(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const checkWhitelisted = async () => {
    error = ''
    try {
      console.log(getFirebase());
      whitelisted = await getFirebase().checkWhitelisted(email)
      // If successful login, you can navigate to another page or show a success message
    } catch (err) {
      error = err.message;
    }
  }
  const handleLogin = async () => {
    error = ''
    if (email == "" || password == "") {
      error = "please actually type an email and password";
    }

    try {
      console.log(getFirebase());
      await getFirebase().login(email, password);
      window.location.href = "/announcement"
      // If successful login, you can navigate to another page or show a success message
    } catch (err) {
      error = err.message;
      // error = "Wrong password or account doesn't exist yet"
    }
  };

  const handleSignup = async () => {
    try {
      await firebase.signup(email, password, name);
      window.location.href = "/verifyemail"
      // If successful signup, you can navigate to another page or show a success message
    } catch (err) {
      error = err.message;
    }
  };

  onMount(() => {
    // You can add any onMount logic here, if needed
  });
</script>

<div id="signin">
  {#if whitelisted}
  {#if isLogin}
  <h1>Login</h1>
{:else}
  <h1>Signup</h1>
{/if}


  <p style="color: red;">{error}</p>


<form id="signin">
  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} />

  {#if !isLogin}
  <label for="name">Name:</label>
  <input id="name" bind:value={name} />
  {/if}

  <label for="password">Password:</label>
  <input type="password" id="password" bind:value={password} />

  {#if isLogin}
    <button type="button" on:click={handleLogin}>Login</button>
    <p>
      Don't have an account? <a href="#" on:click={() => (isLogin = false)}
        >Sign up</a
      >
    </p>
    <p>
      Forgot password? <a href="#" on:click={() => (userForgotPassword())}
        >Reset</a
      >
    </p>
  {:else}
    <button type="button" on:click={handleSignup}>Sign up</button>
    <p>
      Already have an account? <a href="#" on:click={() => (isLogin = true)}
        >Login</a
      >
    </p>
  {/if}
</form>
  {:else}
  <h1>Are you whitelisted?</h1>
  <p style="color: red;">{error}</p>

  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} />
  <button id="checkwhitelisted" type="button" on:click={checkWhitelisted}>→ </button>
  {/if}

  
</div>

<style>
  #signin {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  #signin input {
    margin-bottom: 1rem;
  }
  #checkwhitelisted {
    font-size: 2rem;
    padding: 0;
  }
</style>
