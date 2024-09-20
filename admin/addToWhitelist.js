import admin from 'firebase-admin'

import serviceAccount from "./adminkey.json" assert {type: "json"};

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://tuskytime-default-rtdb.firebaseio.com"
  });


// write data to a rl database location
function writeUserData(path, data) {
    var db = admin.database();
    let r = db.ref(path)
    
    console.log("writing to", path)
    r.set(data)
   
}
// this is being run from cmd, so get first argument

const email = process.argv[2];


writeUserData(`email/${btoa(email)}`, true);
setTimeout(() => {
    process.exit(0)
}, 5000)
