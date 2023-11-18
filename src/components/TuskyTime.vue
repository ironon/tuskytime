<script setup lang="ts">
  import {computed, ref} from "vue"
  import TT from "../assets/tuskytime.json"
  import Datepicker from '@vuepic/vue-datepicker';
  import Advert from "./Advert.vue";
 
  const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  function getDate(date) {
    
    // Format day/month/year to two digits
    var formattedDate = ('' + date.getDate()).slice(-2);
    var formattedMonth = ('' + (date.getMonth() + 1)).slice(-2);
    var formattedYear = date.getFullYear().toString().substr(2,2);

    // Combine and format date string
    return formattedMonth + '/' + formattedDate
  }
  function findMatchingRange(inputTime: string, timeRanges: string[]) {
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
    const newDate = new Date(selectedDate.value.getTime() + (newoffset * millisecondsInDay))
    selectedDate.value = newDate
   
  }
  function getAdvisoryQuote() {
    const options = ["bro it's wednesday", "wendsasydadsy", "duhh", "i should stop insulting my website users 🤔", `"hmm it's wednesday i wonder what TT it is"`, "busky bime" ,"you're such a silly dunderhead", "<insert roast here>", "oui c'est mercredi", "oh fiddlesticks its wednesday" , "💀💀💀"]

    return options[Math.floor(Math.random() * options.length)]
  }

  function getTimeInHHMM() {
    const now = new Date();
    const hours = String(now.getHours() % 12).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  const millisecondsInDay = 8.64e+7
  const selectedDate = ref(getToday())
  var day = computed(() => {
    const date = selectedDate.value
   
    const mmddyy = getDate(date)
    const mmdd = mmddyy.slice(0,5)
    const weekday = days[date.getDay()]
    
    return getDay(TT, mmdd, mmddyy, weekday)
  })
  var block_info = computed(() => {
    const date = selectedDate.value
   
   const mmddyy = getDate(date)
   const mmdd = mmddyy.slice(0,5)
   const weekday = days[date.getDay()]
   
   let day = getDay(TT, mmdd, mmddyy, weekday)
  
   let schedule = a_day_times
   if (day.day == "B") {
    schedule = b_day_times
   }
   let times = Object.keys(schedule)
   let currentTime = getTimeInHHMM()
   console.log(currentTime)
   console.log(times)
   let range = findMatchingRange(currentTime, times)
   if (range == null) {
    return {block:"",lunch:""}
   }
   let blockstuff = `${schedule[range]}: ${range}`
   console.log(currentTime)
   let lrange = findMatchingRange(currentTime, Object.keys(lunchTimes))
   if (lrange == null) {
    return {block:blockstuff,lunch:""}
   }

   return {block:blockstuff, lunch:`${lunchTimes[lrange]}: ${lrange}`}
  })


  
</script>


<template>
  
  <div id="tt-menu">
    <Advert :ad="getAd"/>
    <button id="changeday" @click="modifyOffset(-1)">&lt</button>
    <div v-if="day.school == false" id="tt-info">
      <h1> NO SCHOOL!?!!</h1>
      <h1 id="day-type">{{day.day}}</h1>
      <p for="day-type">{{day.weekday}}</p>
      <img src="assets/school.png"/>
      <div id="datepickerdiv">
        <Datepicker v-model="selectedDate" id="datepicker" :enable-time-picker="false" :clearable="false"></Datepicker>
      </div>

    </div>
    
    <div v-else id="tt-info">
      
      <p for="day-type">TODAY IS A{{day.day == "A" ? "N" : ""}}</p>
      <h1 id="day-type">{{day.day}}</h1>
      <p for="day-type">{{day.weekday}}</p>
      <br/>
      <p id="tt-label">AND IT'S TUSKY TIME </p>
      <h1 id="TT">{{day.TT}}</h1>
      <h3 v-if="day.TT == 'Advisory'">{{getAdvisoryQuote()}}</h3>
      <!-- <p>Current Block:</p> -->
      <p id="italics">{{block_info.block}}</p>
      <p id="italics">{{block_info.lunch}}</p>
      <!-- <a id="formthing" href="https://docs.google.com/forms/d/e/1FAIpQLSdXZ3ZGz6pwpH3fNs4_B-35wcJWBjK15WHdbm201zkS-2q2PA/viewform?pli=1" style="color:blue -->
      <!-- ">Please fill out 2 questions for me. (the fate of the world depends on it)</a> -->
    
      <h1 v-if="day.special">({{day.special}})</h1>
  
      <div id="datepickerdiv">
        <Datepicker v-model="selectedDate" id="datepicker" :enable-time-picker="false" :clearable="false"></Datepicker>
      </div>
    </div>
    <button id="changeday" @click="modifyOffset(1)">&gt</button>
    <Advert :ad="getAd"/>
  </div>
 
</template>



