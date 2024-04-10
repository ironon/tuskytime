<script lang="ts">

    import { getAuth, signOut } from "firebase/auth";
    import { onMount } from "svelte";
    let firebase: { realSignOut: any; getPosts?: (amount: number) => Promise<any>; checkWhitelisted?: (email: string) => Promise<boolean>; isSignedIn?: () => Promise<boolean>; postAnnouncement?: (title: string, html: string) => Promise<void>; editAnnouncement?: (id: any, title: any, html: any) => Promise<void>; getPost?: (id: string) => Promise<any>; deletePost?: (id: any) => Promise<void>; getUserData?: () => Promise<any>; getUser?: () => Promise<any>; login?: (email: string, password: string) => Promise<void>; signup?: (email: string, password: string, name: string) => Promise<void>; } | null = null
    onMount(async () => {
        firebase = await import("../../lib/useFirebase")
        console.log(await firebase.isSignedIn())
        //@ts-ignore
        if (!(await firebase.isSignedIn())) {
            window.location.href = "/"
        }
    })
    async function signOutNow() {
        //@ts-ignore
        await firebase.realSignOut() 
        window.location.reload()
    }
</script>

<div id="signout">
    <p>Are you sure you'd like to sign out?</p>
    <button on:click={signOutNow}>Yes</button>
    <button on:click={() => window.location.href = "/"}>No</button>
</div>