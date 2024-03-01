<script>

    import {getPost} from "$lib/useFirebase"
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id")
    if (!id) {
       throw new Error("Post not found 😭") 
    }
    const post = getPost(id)

</script>

<div id="post">
    {#await post}
        
    {:then data} 
        
    <h1>{data.title}</h1>
    <p>{data.html}</p>

    {/await}
</div>