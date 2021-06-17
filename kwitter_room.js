
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
   document.getElementById("user_name").innerHTML="welcome "+user_name;
   function addroom(){
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose:"adding room name"
         });
         localStorage.setItem("room_name",room_name);
         window.location("kwitter_page.html");

   }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomname:"+Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;

      //Start code

      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location("kwitter_page.html");
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("kwitter_login.html");
}

