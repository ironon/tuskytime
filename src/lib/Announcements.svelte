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
         <Table.Head class="w-[300px]">Annoucements</Table.Head>
      
       </Table.Row>
     </Table.Header>
     <Table.Body>
       {#each posts as post, i (i)}
         <Table.Row>
           <Table.Cell class="font-large"><a id="font-large" href={getURL(post.id)}>{post.title}</a></Table.Cell>
        
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
    #anntable a{
      font-size: 1.3rem;
     
    }
  </style>