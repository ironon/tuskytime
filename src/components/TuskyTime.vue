<script setup lang="ts">
  import {computed, ref} from "vue"
  import TT from "../assets/tuskytime.json"
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';
 
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
    const options = ["bro it's wednesday", "wendsasydadsy", "duhh", `"hmm it's wednesday i wonder what TT it is"`, "busky bime"]
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
      <img src="assets/school.png"/>
      <div id="datepickerdiv">
        <Datepicker v-model="selectedDate" id="datepicker" :enable-time-picker="false" :clearable="false"></Datepicker>
      </div>

    </div>
    
    <div v-else id="tt-info">
      
      <label for="day-type">TODAY IS A{{day.day == "A" ? "N" : ""}}</label>
      <h1 id="day-type">{{day.day}}</h1>
      <label for="day-type">{{day.weekday}}</label>
      <br/>
      <p id="tt-label">AND IT'S TUSKY TIME </p>
      <h1 id="TT">{{day.TT}}</h1>
      <h3 v-if="day.TT == 'Advisory'">{{getAdvisoryQuote()}}</h3>
      <h1 v-if="day.special">(also apparently its {{day.special}})</h1>
  
      <div id="datepickerdiv">
        <Datepicker v-model="selectedDate" id="datepicker" :enable-time-picker="false" :clearable="false"></Datepicker>
      </div>
    </div>
    <button id="changeday" @click="modifyOffset(1)">&gt</button>
  </div>
 
</template>

<style>
  #tt-menu {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  #datepickerdiv {
    width: 100%;
    display: flex;
    justify-content: center;

  }
  .dp__theme_light {
    --dp-background-color: rgb(129, 158, 236);
    --dp-text-color: #3242f1;
    --dp-hover-color: #442bd0;
    --dp-hover-text-color: #212121;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #1976d2;
    --dp-primary-text-color: #f8f5f5;
    --dp-secondary-color: #0a2c70;
    --dp-border-color: rgb(33, 5, 245);
    --dp-menu-border-color: rgb(21, 21, 220);
    --dp-border-color-hover: #aaaeb7;
    --dp-disabled-color: #f6f6f6;
    --dp-scroll-bar-background: #f3f3f3;
    --dp-scroll-bar-color: #959595;
    --dp-success-color: #3a41c4;
    --dp-success-color-disabled: #a3d9b1;
    --dp-icon-color: #083adf;
    --dp-danger-color: #8ef1e9;
    --dp-highlight-color: rgba(25, 118, 210, 0.1);
 }
  #tt-info {
    text-align: center;
    width: 42%;
    font-size: min(1rem, 2.5vmin);
  }
  #tt-info img {
    width: 100%;
  }
 
  #changeday {
    height: 3rem;
    width: 3rem;
    background-color: var(--lighter-main);
    box-shadow: 0rem 0.3rem;
    color: var(--main);
    font-size: 1.5rem;
    align-self: center;
  }
  #changeday:active {
    margin-top: 0.3rem;
    box-shadow: 0rem 0rem;
  }
  #day-type, #TT {
    font-size: min(5rem, 10vmin);
    margin: .5rem;
    
  }
  
</style>