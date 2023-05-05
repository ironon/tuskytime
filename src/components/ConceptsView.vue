<script setup lang="ts">
import {getConcepts, createNewConcept} from "../scripts/Concepts"
import {ref} from "vue"
console.log("Concepts view loading!")
let props = defineProps(["redirect"])
let concepts = getConcepts()


function onCreateClick() {
    let newConcept = createNewConcept()
    //@ts-ignore
    window.gotoCanvasId = newConcept.id

}
</script>

<template>
    <div v-for="concept in concepts" class="conceptview">
        <a :href="'study/concepts/'+concept.id">{{concept.name}}</a>
    </div>
    <button class="addconcept" @click="onCreateClick">+</button>
</template>

<style scoped>
    .conceptview {
        width: 7rem;
        height: 4rem;
    }
    .addconcept{
        width: 7rem;
        height: 4rem;
    }
</style>