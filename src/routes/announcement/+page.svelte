
<script>
    // import Editor from 'cl-editor';
    // import {onMount} from "svelte"
    import Editor from "cl-editor/src/Editor.svelte"
    import {onMount} from "svelte"
   
   
    /**
     * @type {{ postAnnouncement: any; checkWhitelisted?: (email: string) => Promise<boolean>; isSignedIn?: () => Promise<boolean>; login?: (email: any, password: any) => Promise<void>; signup?: (email: any, password: any) => Promise<void>; }}
     */
    let firebase
    onMount(async () => {
        firebase = await import("../../lib/useFirebase")
    })
    let html = ''
    let colors = ['#333333', '#333333', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff',
        '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff',
        '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff',
        '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2',
        '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466']
    let title = ""
    let editor
    function post() {
        if (title == "" || html == "") {
            return
        }
        firebase.postAnnouncement(title, html)
        // window.location.href = "/"
    }
    
</script>
<div id="announcement-page">
    <h1>Make Announcement</h1>
    <p>Use this for club announcements, PSAs, really anything, just use good judgment.</p>
    <label for="title">Title:</label>
    <input id="title" type="text" bind:value={title}/>

    <!-- {@html html} -->
    <Editor {html} colors={colors} on:change={(evt)=>html = evt.detail}/>
    <button id="post" on:click={post}>POST</button>
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
    }
</style>