
<script lang="ts">
    import {onMount} from "svelte"
    
    onMount(() => {
        let el = document.getElementById("aboutbutton")
        if (el == null) {
            return
        }
        el.innerText = "Home"
        el.href = "/"
        el.onclick = () => {
            document.location = "/"
            el.innerText = "About"
            el.href = "/about"   // i love hacks
        }
    })
</script>
<div id="about">
    <h1 id="aboutpageindicator">What is Tusky Time?</h1>
    <p>Tuscarora High School has a block of time every day that rotates between different classes that we're supposed to go to, on top of the regular rotations. This website simply displays the block of time we're supposed to go to that day. It does this by reading from the schedule, which can be found on the Tuscarora website, found here:</p>
    <a href="https://www.lcps.org/site/default.aspx?PageType=3&ModuleInstanceID=134772&ViewID=C9E0416E-F0E7-4626-AA7B-C14D59F72F85&RenderLoc=0&FlexDataID=170043&PageID=121927">A/B Schedule</a>
</div>

  
  <style>
      h1 {
          font-size: 3em;
          text-align: center;
      }
      #about {
          width: 60%;
          display: flex;
          flex-direction: column;
      }
      p, a {
          font-size: 1.5em;
          text-align: center;
      }
  </style>
  