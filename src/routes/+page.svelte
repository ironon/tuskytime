<script>
    import Announcements from "$lib/Announcements.svelte";
  import NoSchedule from "$lib/NoSchedule.svelte";
  import SportsScores from "$lib/SportsScores.svelte"
import TuskyTime from "$lib/TuskyTime.svelte";

</script>
<TuskyTime></TuskyTime>
<Announcements></Announcements>
<div id="scaling">

    <!-- <NoSchedule></NoSchedule> -->
    <SportsScores></SportsScores>
</div>
<hr>

<style>
     #scaling {
        margin-top: 4rem;
        width: 30%;
    }
    @media only screen and (max-width: 900px) {
        #scaling {
            /* : 50%; */
            width: 90%;
            /* padding-left: 3rem;
            padding-right: 3rem; */
          
        }
    }
   
    hr {
        margin-bottom: 10rem;
    }
  
</style>