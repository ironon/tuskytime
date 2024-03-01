<script>

    // import {getPost} from "$lib/useFirebase"
    import {onMount} from "svelte"
    /**
     * @type {Promise<any> | null}
     */
    let post = null
    onMount(async () => {
        let {getPost} = await import("$lib/useFirebase")
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id")
        if (!id) {
           return  
        }
        post = getPost(id)
    })
    
</script>


<div id="post">
    {#if post != null}

    {#await post}
        
    {:then data} 
    <div id="post">

        <h1>{data.title}</h1>
        <p>{@html data.html}</p>
    </div>

    {/await}
    {/if}
</div>

<style>
    #post {
        max-width: 80%;
        align-items: center;
        display: flex;
        flex-direction: column;
        /* juv  */
    }
   
    @media only screen and (max-width: 767px) {
    /* Your CSS rules for phones go here */
        #post * {
            /* font-size: small; */
            /* text-wrap: wrap; */
            /* overflow-wrap: break-word; */
            width: 100%;
            /* border: 1px solid red; */
            
        }
       
        
    }
</style>