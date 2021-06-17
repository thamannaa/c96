//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDqjQBSGpvXNMLPv2ahzeyavkner96g1OE",
    authDomain: "practice-kwitter-22fa4.firebaseapp.com",
    databaseURL: "https://practice-kwitter-22fa4-default-rtdb.firebaseio.com",
    projectId: "practice-kwitter-22fa4",
    storageBucket: "practice-kwitter-22fa4.appspot.com",
    messagingSenderId: "811494718900",
    appId: "1:811494718900:web:3b541e78036a2306a5c6e1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").value="";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();