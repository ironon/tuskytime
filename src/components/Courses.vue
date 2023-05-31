<script setup lang="ts">
    
    const props = defineProps(["grade"])
    var emit = defineEmits(['courseAdded'])
   
    var grade = props.grade
    var selected = [null, null, null, null, null, null, null, null]
    var courses = useState("courses", () => getCourses(grade))
    var optionChanged = (id, newValue) => {
       
        selected[id] = newValue
        courses.value = getCourses(grade)
        emit("courseAdded", id, newValue)
    }
    
    var courseNames = (id) => { 
        const currentCourses = courses.value
        const result = currentCourses['Name'].filter((name) => {
            if (selected.includes(name) && id != selected.indexOf(name)) {
                console.log("Removing " + name + "!!")
                return false
            }
            
            return true
        })
        return result
    }

</script>

<template>
    <div id="courses">
        <p>A Day:</p>
        <Doption v-for="number in [0,1,2,3]" :courses="courseNames(number)" :valueid="number" @changed="optionChanged"></Doption>
        <p>B Day:</p>
        <Doption v-for="number in [4,5,6,7]" :courses="courseNames(number)" :valueid="number" @changed="optionChanged"></Doption>
        
        
    </div>
</template>

<style scoped>

    #courses {
        margin-top: 0.1rem;
        margin-bottom: 1rem;
        padding: 0.1rem;
       
        /* background-color: var(--lightish-main); */
        display: flex;
        flex-direction: column;
        /* border: 1ch dotted var(--light-main); */
    } 
    #courses select {
        width: 20rem;
    }

</style>