<script setup lang="ts">
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { emit } from "process";
const firebaseConfig = {
        apiKey: "AIzaSyA62gZmAbAqVdl7ySW9tZlKvIDUBi71ydQ",
        authDomain: "tuskytime.firebaseapp.com",
        projectId: "tuskytime",
        storageBucket: "tuskytime.appspot.com",
        messagingSenderId: "462748644600",
        appId: "1:462748644600:web:77801fadbdfac90f37f70d",
        measurementId: "G-RHMV5QC0XJ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const emit = defineEmits(["sign-in"])
const provider = new GoogleAuthProvider
const signInWithGoogle = () => {
  console.log("signing in!")
  const user = signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      return result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
    emit("sign-in")
}
</script>



<template>
    <div id="sign-in">
        <GoogleButton @sign-in="signInWithGoogle"/>
    </div>
</template>



