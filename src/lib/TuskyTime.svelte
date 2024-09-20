<script>

    import TT from "../assets/tuskytime.json"
    import { DateInput } from 'date-picker-svelte'
	let date = new Date()
   
    const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    function getDate(date) {
      
      // Format day/month/year to two digits
      var formattedDate = ('' + date.getDate()).slice(-2);
      var formattedMonth = ('' + (date.getMonth() + 1)).slice(-2);
      var formattedYear = date.getFullYear().toString().substr(2,2);
  
      // Combine and format date string
      return formattedMonth + '/' + formattedDate
    }
    function findMatchingRange(inputTime, timeRanges) {
      const inputDate = new Date(`2023-11-05T${inputTime}`);
      const inputTimeMs = inputDate.getTime();
  
      for (const range of timeRanges) {
        const [start, end] = range.split('-').map(time => new Date(`2023-11-05T${time.trim()}`));
        const startMs = start.getTime();
        const endMs = end.getTime();
  
        if (inputTimeMs >= startMs && inputTimeMs <= endMs) {
          return range;
        }
      }
  
      return null;
    }
    let a_day_times = {
      "09:30 - 10:53": "1st Block",
      "10:53 - 11:36": "Tusky Time/Advisory",
      "11:36 - 01:36": "2nd Block",
      "01:36 - 02:57": "3rd Block",
      "02:57 - 04:18": "4th Block"
    }
    let b_day_times = {
      "09:30 - 10:53": "5th Block",
      "10:53 - 11:36": "Tusky Time/Advisory",
      "11:36 - 01:36": "6th Block",
      "01:36 - 02:57": "7th Block",
      "02:57 - 04:18": "8th Block"
    }
    let lunchTimes = {
      "11:40 - 12:09": "A Lunch",
      "12:09 - 12:38": "B Lunch",
      "12:38 - 01:07": "C Lunch",
      "01:07 - 01:36": "D Lunch"
  
    }
    function getDay(TT, mmdd, full_date, weekday) {
      if (TT[mmdd]) {
        TT[mmdd]["full_date"] = full_date
        TT[mmdd]["weekday"] = weekday
        return TT[mmdd]
        
      }
      
      return {
        school: false,
        full_date: full_date,
        weekday: weekday
      }
      
    }
    let ads = ["studentadvert.png", "teacheradvert.png", "christmas_advert.png"]
    function getAd() {
      let selection = ads.splice(Math.floor(Math.random() * ads.length), 1) //random takes an advert and returns it
      return selection
    }
    function getToday() {
      return new Date(Date.now())
    }
    function modifyOffset(newoffset) {
      const newDate = new Date(selectedDate.getTime() + (newoffset * millisecondsInDay))
      selectedDate = newDate
     
    }
    function getAdvisoryQuote() {
      const options = ["bro it's wednesday", "wendsasydadsy", "duhh", "im a comedic genius", "i should stop insulting my website users 🤔", `"hmm it's wednesday i wonder what TT it is"`, "busky bime" ,"you're such a silly dunderhead", "<insert roast here>", "oui c'est mercredi", "oh fiddlesticks its wednesday" , "💀💀💀"]
  
      return options[Math.floor(Math.random() * options.length)]
    }
  
    function getTimeInHHMM() {
      const now = new Date();
      const hours = String(now.getHours() % 12).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    }
    const millisecondsInDay = 8.64e+7
    $: selectedDate = getToday()
    $: day = (() => {
      const date = selectedDate
     
      const mmddyy = getDate(date)
      const mmdd = mmddyy.slice(0,5)
      const weekday = days[date.getDay()]
      
      return getDay(TT, mmdd, mmddyy, weekday)
    })();
    $: block_info = (() => {
      const date = selectedDate
     
     const mmddyy = getDate(date)
     const mmdd = mmddyy.slice(0,5)
     const weekday = days[date.getDay()]
 
    
     let schedule = a_day_times
     if (day.day == "B") {
      schedule = b_day_times
     }
     let times = Object.keys(schedule)
     let currentTime = getTimeInHHMM()
    
     let range = findMatchingRange(currentTime, times)
     if (range == null) {
      return {block:"",lunch:""}
     }
     let blockstuff = `${schedule[range]}: ${range}`
  
     let lrange = findMatchingRange(currentTime, Object.keys(lunchTimes))
     if (lrange == null) {
      return {block:blockstuff,lunch:""}
     }
  
     return {block:blockstuff, lunch:`${lunchTimes[lrange]}: ${lrange}`}
    })();
  
  
    
  </script>
  

  <div id="tt-menu">
      <!-- <Advert :ad="getAd"/> -->
      <button id="changeday" on:click={() => modifyOffset(-1)}>&lt</button>
      {#if day.school == false}

      <div id="tt-info">
        <h1> NO SCHOOL!?!!</h1>
        <!-- {selectedDate} -->
        <!-- <h1 id="day-type">{day.day}</h1> -->
        <p for="day-type">{day.weekday}</p>
        <img src="/school.png"/>
        <DateInput id="dateinput" bind:value={selectedDate} />
  
      </div>
      {:else}

      <div id="tt-info">
        
        <p for="day-type">TODAY IS A{day.day == "A" ? "N" : ""}</p>
        <h1 id="day-type">{day.day}</h1>
        <p for="day-type">{day.weekday}</p>
        <br/>
        <p id="tt-label">AND IT'S TUSKY TIME </p>
        <h1 id="TT">{day.TT}</h1>
        {#if day.TT == "Advisory"}

        <h3 id="advisoryquote">{getAdvisoryQuote()}</h3>
        {/if}
        <!-- <p>Current Block:</p> -->
        <p id="italics">{block_info.block}</p>
        <p id="italics">{block_info.lunch}</p>
        <!-- <a id="formthing" href="https://docs.google.com/forms/d/e/1FAIpQLSdXZ3ZGz6pwpH3fNs4_B-35wcJWBjK15WHdbm201zkS-2q2PA/viewform?pli=1" style="color:blue -->
        <!-- ">Please fill out 2 questions for me. (the fate of the world depends on it)</a> -->
        {#if day.special}

        <h1>({day.special})</h1>
        {/if}
        <DateInput id="dateinput" bind:value={selectedDate} />
  
        
      </div>
      {/if}
      
      <button id="changeday" on:click={() => modifyOffset(1)}>&gt</button>
      <!-- <Advert :ad="getAd"/> -->
    </div>
   
<style>
  #advisoryquote{
    font-style: italic;
  }
  #tt-menu {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-height: 50%;
    max-height: fit-content;
    /* transform: translateY(-2rem); */
    /* margin-bottom: 8rem; */
    /* padding-top: 0rem; */
    background-color: var(--lighter-main);
  }
  @media only screen and (max-width: 500px) {
   #tt-menu {
    width: 100%;
    justify-content: space-around;
    
    /* height: 100%; */
    display: flex;
    /* margin-top: 4rem; */
    
   }

   
   #tt-info {
    /* transform: scale(1.5); */
    flex-grow: 2;
    
    /* min-height: 50vh; */
   }
   #tt-info p {
      font-size: medium;
   }
   #tt-info h1 {
    font-size: 2rem;
   }
}
</style>
  
  
  
