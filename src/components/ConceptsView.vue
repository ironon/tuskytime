<script setup lang="ts">
import {getConcepts, createNewConcept, Concept} from "../scripts/Concepts"
import {ref} from "vue"
console.log("Concepts view loading!")
const props = defineProps(["redirect"])
let concepts = getConcepts()
let moreMenu = ref("")

function onCreateClick() {
    let newConcept = createNewConcept()
    //@ts-ignore
    window.gotoCanvasId = newConcept.id

}
function onTrash(concept: Concept) {
    delete concepts[concepts.indexOf(concept)]
    location.reload() //maybe one day ill figure out the proper way to do this
    moreMenu.value = ""
}
function showMoreMenu(event) {
    
    if (moreMenu.value == event.target.id) {
    
        moreMenu.value = ""
    } else {

        moreMenu.value = event.target.id
    }
}
</script>

<template>
    <div id="conceptview">

        <div v-for="concept in concepts" class="conceptbutton">
            <div id="imghold">
              
                <img id="conceptpreview" :src="concept.previewImage"/>
                <a :href="'study/concepts/'+concept.id">{{concept.name}}</a>
                <button @click="showMoreMenu"><p :id="concept.id">. . .</p></button>
                <div id="moremenu" v-if="moreMenu == concept.id">
                    <img src="/assets/trashbin.png" @click="onTrash(concept)"/>
                </div>
            </div>
        </div>
        <button class="addconcept" @click="onCreateClick">+</button>

    </div>
</template>

<style scoped>
   
</style>