
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyDSzIqnQFHNPvYuRIiHsurskXdA8p0awFk",
      authDomain: "class-test-a476b.firebaseapp.com",
      databaseURL: "https://class-test-a476b-default-rtdb.firebaseio.com",
      projectId: "class-test-a476b",
      storageBucket: "class-test-a476b.appspot.com",
      messagingSenderId: "952000060607",
      appId: "1:952000060607:web:a7d67a3362d1543d6afa0a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
