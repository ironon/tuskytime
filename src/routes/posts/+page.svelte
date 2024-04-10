<script>
// @ts-nocheck


    // import {getPost} from "$lib/useFirebase"
    import {onMount} from "svelte"
    /**
     * @type {Promise<any> | null}
     */
    let post = null
    let isUserThatPosted = null
    let deletePost = false
    /**
     * @type {import("@firebase/auth").User | null}
     */
    let email = null
    // let userData = null
    /**
     * @type {string | null}
     */
    let id = null
    async function deletePostFromServer() {
        await i_deletePost(id)
        window.location.href = "/"
    }
    /**
     * @type {((arg0: string | null) => void) | null}
     */
    let i_deletePost = null
    onMount(async () => {
        let {getPost, getUser, deletePost, getUserData} = await import("$lib/useFirebase")
        i_deletePost = deletePost
        const urlParams = new URLSearchParams(window.location.search);
        id = urlParams.get("id")
        if (!id) {
           return  
        }
        
        post = getPost(id)
        console.log(await post)
        // @ts-ignore
        email = (await getUser())?.email
        // console.log(await getUser())
        // userData = getUserData()
        
    })

    
</script>


<div id="post">
    <dialog id="del-post" open={deletePost}>
        <p>Are you sure you'd like to delete this post?</p>
        <button on:click={deletePostFromServer}>CONFIRM</button>
        <button on:click={deletePost = false}>CANCEL</button>
    </dialog>
    {#if post != null}
       
    {#await post}
        ......
    {:then data} 
    <div id="post">
      
        {#if data.author == email}
        <div id="panel">

            <button on:click={() => {window.location.href = `/announcement?id=${id}`}}>Edit</button>
            <button on:click={() => {deletePost = true}}>Delete</button>
        </div>
        {/if}
        <!-- {email} -->
        <h1>{data.title}</h1>
        <h3>By {data.author_name}</h3>
        <p>{@html data.html}</p>
    </div>

    {/await}
    {:else}
    Loading...
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
   
    #del-post {
        background-color: var(--light-main);
        border-color: black;
        
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