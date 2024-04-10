<script>
    // import { getUser } from "$lib/useFirebase";
    import { onMount } from "svelte";

    let verified = false
    onMount(async () => {
        let {getUser} = await import("$lib/useFirebase")
        let user = (await getUser())
        verified = user.emailVerified
        setTimeout(async () => {
            window.location.reload() //this is such a hack but idfc
        }, 6000)
    })
</script>

<div id="verifyemail">

    <p>You've been sent a verification email.</p>
    <p class="italics">LCPS delays external emails anywhere from 1-10 minutes. You may need to wait longer than usual for the email to come through</p>
   <div style="display: flex; justify-content: center; flex-direction: column; align-items:center;">

       <p>EMAIL STATUS:</p>
       {#if verified}
           <p id="verified">EMAIL VERIFIED</p>
           <button style="width:5rem" on:click={() => window.location.href = "/announcement"}>→</button>
       {:else}
           <p id="unverified">NOT VERIFIED</p>
       {/if}
   </div>
</div>

<style>
    .italics {
        font-style: italic;
        /* font-size: larger; */
        
    }
    #verified {
        background-color: lightgreen;
        padding: 1rem;
        display: block;
        width: min-content;
        border: 1px solid black;
    }
    #unverified {
        background-color: lightcoral;
        padding: 1rem;
        display: block;
        width: min-content;
        border: 1px solid black;
    }
</style>