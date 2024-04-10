<script>
    import * as Table from "$lib/components/ui/table"
    // import "../app.pcss";
    import {onMount} from "svelte"
    let firebase
    /**
     * @type {any[]}
     */
    let posts = []
    onMount(async () => {
        firebase = await import("./useFirebase")
        posts = await firebase.getPosts(10)
        // posts.reverse()

    })
    let getURL = (id) => {
      return "/posts?id=" + id
    }
    
  </script>
 <div id="anntable">
   <Table.Root>
     <!-- <Table.Caption>Announcements</Table.Caption> -->
     <Table.Header>
       <Table.Row>
         <Table.Head class="w-[100px]">Title</Table.Head>
         <Table.Head>Author</Table.Head>
       </Table.Row>
     </Table.Header>
     <Table.Body>
       {#each posts as post, i (i)}
         <Table.Row>
           <Table.Cell class="font-medium"><a href={getURL(post.id)}>{post.title}</a></Table.Cell>
           <Table.Cell>{post.author_name}</Table.Cell>
         </Table.Row>
       {/each}
     </Table.Body>
   </Table.Root>
   
  </div>
  <style>
    #anntable {
      /* width: 40%; */
      /* height: 40%; */
    }
  </style>