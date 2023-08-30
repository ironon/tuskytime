<script setup lang="ts">
  import {computed, ref} from "vue"
  import TT from "../assets/tuskytime.json"
  import Datepicker from '@vuepic/vue-datepicker';

 
  const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  function getDate(date) {
    
    // Format day/month/year to two digits
    var formattedDate = ('' + date.getDate()).slice(-2);
    var formattedMonth = ('' + (date.getMonth() + 1)).slice(-2);
    var formattedYear = date.getFullYear().toString().substr(2,2);

    // Combine and format date string
    return formattedMonth + '/' + formattedDate
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
  function getToday() {
    return new Date(Date.now())
  }
  function modifyOffset(newoffset) {
    const newDate = new Date(selectedDate.value.getTime() + (newoffset * millisecondsInDay))
    selectedDate.value = newDate
   
  }
  function getAdvisoryQuote() {
    const options = ["bro it's wednesday", "wendsasydadsy", "duhh", "i should stop insulting my website users 🤔", `"hmm it's wednesday i wonder what TT it is"`, "busky bime" ,"you're such a silly dunderhead", "<insert roast here>", "oui c'est mercredi", "oh fiddlesticks its wednesday"]
    return options[Math.floor(Math.random() * options.length)]
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


  
</script>


<template>
  
  <div id="tt-menu">
    
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
      <!-- <a id="formthing" href="https://docs.google.com/forms/d/e/1FAIpQLSdXZ3ZGz6pwpH3fNs4_B-35wcJWBjK15WHdbm201zkS-2q2PA/viewform?pli=1" style="color:blue -->
      <!-- ">Please fill out 2 questions for me. (the fate of the world depends on it)</a> -->
    
      <h1 v-if="day.special">({{day.special}})</h1>
  
      <div id="datepickerdiv">
        <Datepicker v-model="selectedDate" id="datepicker" :enable-time-picker="false" :clearable="false"></Datepicker>
      </div>
    </div>
    <button id="changeday" @click="modifyOffset(1)">&gt</button>
  </div>
 
</template>



