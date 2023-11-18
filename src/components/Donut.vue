
<script setup lang="ts">
let props = defineProps(["teacher"])
let teacher = true ? props.teacher == "true" : false
</script>

<template>
    <div id="donuts">
        <h1 id="donutstitle">YOU SHOULD GET SOME DONUTS.</h1>
        <p id="subcaption">no like, really.</p>

        <p>Everybody agrees that donuts are simply amazing in every way shape and form. And I just thought, y'know, because of the holiday season, I should aid others in acquiring the most delicious confectionery treat known to humankind.</p>
        <!-- <p v-if="!teacher">(i'm on the ACL robotics team and they're doing a fundraiser to...do robotics.)</p> -->
        <p>I'm on the ACL Roboloco Robotics team and they're doing a Krispy Kreme fundraiser to support the team, and support would be much appreciated. </p>
        <h3>WHAT DONUTS?!</h3>
        <ul>
            <li>Dozen Glazed Donuts ($13)</li>
            <li>Dozen Specialty Donuts ($15) (4 Chocolate, 4 Raspberry Filled, 4 Kreme Filled)</li>
        </ul>
       

       <a id="linky" href="https://forms.gle/2RAPSYVdDJXTfzYR8">PURCHASE</a>
    
        <h3>WHY?!</h3>
        <ul>
            <li id="aboutpageindicator">Donuts are really good.</li>
            <li v-if="teacher">If you're a teacher, you could throw an awesome class party.</li>
            <li>"Christmas" and "donuts" are basically the same word</li>
            <li>The robotics coach would think I'm a actual magician</li>
        </ul>

        <h3>WHEN?!</h3>
        <p>Donuts would be delivered in December, the week of 12/4. I will deliver them that week to y'all, or if you go to the Academies you can just pick them up there in room 1403 that week.</p>
        
    </div>
</template>