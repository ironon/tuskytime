import { initializeApp } from '@firebase/app';
export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {
        apiKey: "AIzaSyA62gZmAbAqVdl7ySW9tZlKvIDUBi71ydQ",
        authDomain: "tuskytime.firebaseapp.com",
        databaseURL: "https://tuskytime-default-rtdb.firebaseio.com",
        projectId: "tuskytime",
        storageBucket: "tuskytime.appspot.com",
        messagingSenderId: "462748644600",
        appId: "1:462748644600:web:77801fadbdfac90f37f70d",
        measurementId: "G-RHMV5QC0XJ"
    };
    const app = initializeApp(firebaseConfig)
    console.log("Loaded Firebase Plugin!")
        
  })
  