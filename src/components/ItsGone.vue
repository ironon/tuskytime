
<template>
    <div id="itsgone">
        <h1>TUSKYTIME IS GONE 😭</h1>
        <img id="itsgoneimg" src="/assets/gravestone.png">
        <p>it's okay i don't think anyone knew what the point of it was</p>
        <a href="https://loudounlearns.net" id="coollink">I made a new website (you should go check it out)</a>
    </div>
</template>

<style scoped>
#itsgoneimg {
    width: 12rem;
}
#coollink {
    color: blue;
    
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
#itsgone {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#itsgone p {
    font-style: italic;
}
#itsgone a {
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1);
    background-color: rgba(0, 0, 0, 0.05);
}
</style>