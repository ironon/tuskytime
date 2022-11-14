<script setup lang="ts">
  import {computed, ref} from "vue"
  import TT from "assets/tuskytime.json"
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  function getDate(date) {
    
    // Format day/month/year to two digits
    var formattedDate = ('' + date.getDate()).slice(-2);
    var formattedMonth = ('' + (date.getMonth() + 1)).slice(-2);
    var formattedYear = date.getFullYear().toString().substr(2,2);

    // Combine and format date string
    return formattedMonth + '/' + formattedDate
  }
  function getDay(TT, mmdd, full_date, day) {
    if (TT[mmdd]) {
      TT[mmdd]["full_date"] = full_date
      return TT[mmdd]

    }
    console.log(day)
    return {
      school: false,
      full_date: full_date,
    }
    
  }

  function getAdvisoryQuote() {
    const options = ["bro it's wednesday", "you wasted electricity for me to tell you it's wednesday", "duhh", `"hmm it's wednesday i wonder what TT it is"`, "busky bime"]
    return options[Math.floor(Math.random() * options.length)]
  }
  const offset = ref(0)
  const millisecondsInDay = 8.64e+7
  var day = computed(() => {
    const date = new Date(Date.now() + offset.value * millisecondsInDay)
    const day = days[date.getDay()]
    const mmddyy = getDate(date)
    const mmdd = mmddyy.slice(0,5)
    
    return getDay(TT, mmdd, mmddyy)
  })


  
</script>


<template>
  <p id="tt-date">{{day.full_date}}, {{day.day}}</p>
  <div id="tt-menu">
    <button id="changeday" @click="offset -= 1">&lt</button>
    <div v-if="day.school == false" id="tt-info">
      <h1> NO SCHOOL!!!</h1>
      <img src="assets/school.png"/>
    </div>
    
    <div v-else id="tt-info">
      <label for="day-type">TODAY IS A{{day.day == "A" ? "N" : ""}}</label>
      <h1 id="day-type">{{day.day}}</h1>
      <label for="day-type">DAY</label>
      <br/>
      <p id="tt-label">AND IT'S TUSKY TIME </p>
      <h1 id="TT">{{day.TT}}</h1>
      <h3 v-if="day.TT == 'Advisory'">{{getAdvisoryQuote()}}</h3>
      <h1 v-if="day.special">(also apparently its {{day.special}})</h1>
    </div>
    <button id="changeday" @click="offset += 1">&gt</button>
  </div>
 
</template>

<style>
  #tt-menu {
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
  }
  #tt-info {
    text-align: center;
    width: 30%;
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
    align-self: flex-start;
  }
  #changeday:active {
    margin-top: 0.3rem;
    box-shadow: 0rem 0rem;
  }
  #day-type, #TT {
    font-size: min(6rem, 20vmin);
    margin: .5rem;
  }
  
</style>