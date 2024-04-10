
<script>
    // import Editor from 'cl-editor';
    // import {onMount} from "svelte"
    import Editor from "cl-editor/src/Editor.svelte"
    import {onMount} from "svelte"
   
   
  
    /**
     * @type {{ getUser: any; getPost: any; isSignedIn: any; editAnnouncement: any; postAnnouncement: any; getPosts?: (amount: number) => Promise<any>; checkWhitelisted?: (email: string) => Promise<boolean>; deletePost?: (id: any) => Promise<void>; getUserData?: () => Promise<any>; login?: (email: string, password: string) => Promise<void>; signup?: (email: string, password: string, name: string) => Promise<void>; realSignOut?: () => Promise<void>; }}
     */
    let firebase
    /**
     * @type {string | null}
     */
    let id = null
    let editing = false
    let loaded = false
    let html = ''
    let title = ""
    onMount(async () => {
        firebase = await import("../../lib/useFirebase")
        const urlParams = new URLSearchParams(window.location.search);
        id = urlParams.get("id")
        if ((await firebase.getUser()).emailVerified == false) {
            window.location.href = "/verifyemail"
        }
        if (id != null) {
            editing = true
            let post = await firebase.getPost(id)
            html = post.html
            title = post.title
            loaded = true
        } else {
            loaded = true
        }
        if (firebase) {
            setTimeout(async () => {
                //@ts-ignore
                console.log("Signed in:" + await firebase.isSignedIn())
            }, 1000)
            // @ts-ignore
        }
    })
    let colors = ['#333333', '#333333', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff',
        '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff',
        '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff',
        '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2',
        '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466']
    let editor
    async function post() {
        if (title == "" || html == "") {
            return
        }
        if (editing) {
            await firebase.editAnnouncement(id, title, html)
            window.location.href = "/posts?id=" + id
        } else {
            await firebase.postAnnouncement(title, html)
            window.location.href = "/"
        }
    }
    
</script>
<div id="announcement-page">
    <h1>Make Announcement</h1>
    <p>As long as it's school relevant, it's good.</p>
    <label for="title">Title:</label>
    <input id="title" type="text" bind:value={title}/>
    {#if loaded}
    <!-- {@html html} -->
    <Editor {html} colors={colors} on:change={(evt)=>html = evt.detail}/>
    <button id="post" on:click={post}>{editing ? "EDIT" : "POST"}</button>
    {/if}
</div>
<style>
    label {
        margin-top: 1rem;
    }
    #title {
        margin-bottom: 2rem;
    }
    #post {
        margin-top: 3rem;
    }
    #announcement-page{
        display: flex;
        /* justify-content: center; */
        flex-direction: column;
        justify-content: space-between;
        max-width: 60%;
    }
</style>