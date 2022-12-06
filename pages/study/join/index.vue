<script setup lang="ts">
  let courses = []
  let page = useState(() => 1)
  const updateGrade = (event) => {
      grade.value = event.target.value
  }
  const next = () => {
    if (name.value != "" && grade.value != null) {
        page.value += 1
    } else {
        alert("enter your name and grade bozo")
    }
  }
  const createAccount = async (event) => {
    const info = {
        "grade": grade.value,
        "name": name.value,
        "courses": courses
    }
    console.log(info)
    await sendCreateAccount(info)
    }
    const updateCourse = (index, course) => {
        courses[index] = course
        console.log(course)
    }
    var grade = useState("grade", () => null)
    var name = useState('name', () => "")
    
    
</script>

<template>
    <div id="join-page">
        <p>time to create an account ̶o̶r̶ ̶e̶l̶s̶e̶</p>
        <div id="createaccount">
            <div id="page1" v-if="(page==1)">
                <label for="pref-name">name: </label>
                <input id="pref-name" v-model="name" type="text"/>
                <label for="grade">grade: </label>
                <select id="grade" :value="grade" @input="updateGrade">
                <option v-for="value in [6,7,8,9,10,11,12]" :value="value">{{value}}</option>
                </select>
                <button @click="next">NEXT</button>
            </div>
            <div id="page2" v-if="(page==2)">
                <Courses :grade="grade" @courseAdded="updateCourse"></Courses>
                <button id="create" @click="createAccount">CREATE!</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
     #join-page {
            
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    #join-page label {
        margin-top: 1rem;
    }
    #createaccount {
        display: flex;
        flex-direction: column;
        
    
        /* flex-wrap:wrap; */
       
        flex-shrink: 2;
        flex-grow: 2;
        flex-basis: 10%;
    }
    #createaccount div {
        flex-direction: column;
        display: flex;

    }
    
</style>

