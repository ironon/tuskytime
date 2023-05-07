<script setup lang="ts">
import {getConcepts, createNewConcept, Concept} from "../scripts/Concepts"
import {ref} from "vue"
console.log("Concepts view loading!")
let props = defineProps(["redirect"])
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
    #moremenu{
        width: 2rem;
        opacity: 1;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(20%, 100%);
        border: 2px solid var(--dark-main);
    }
    #moremenu img{
        width: 100%;
        height: auto;
    }
    #conceptview {
       
        width: 100%;
        height: 100%;
        display: flex;
        
    }
    #imghold {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .conceptbutton {
        width: 10rem;
        height: 6rem;
        border: 0.1rem solid var(--light-main);
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        
    }
    .conceptbutton img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: .7;
    }
    .conceptbutton a {
        text-align: center;
        /* transform: translate(0%, 150%); */
        position: absolute;
        top: 0;
        left: 0;
        color: black;
        font-weight: bold;
    }
    .conceptbutton button {
      
        /* transform: translate(0%, 150%); */
        position: absolute;
        bottom: 0;
        right: 0;
        color: black;
        font-weight: bold;
        border: 0px;
        width: 1.5rem;
        height: 1.5rem;
        padding: 0;
        opacity: 0.7;
        box-shadow: 0 0;
        
        
    }

    .conceptbutton button:active {
      
      /* transform: translate(0%, 150%); */
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: var(--main);
      font-weight: bold;
      border: 0px;
      width: 1.5rem;
      height: 1.5rem;
      padding: 0;
      opacity: 0.7;
   
      
      
  }

    .conceptbutton button p {
      
      /* transform: translate(0%, 150%); */
      position: absolute;
      bottom: 0;
      right: 0;
      color: black;
      font-weight: bold;
      border: 0px;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      font-size: 0.5rem;
      font-weight:bold;
      text-align: center;
      transform: scale(2) translate(0, 30%);
   
      
      
  }
    .addconcept{
        width: 10rem;
        height: 6rem;
        margin: 1rem;
    }
</style>