
const firebaseConfig = {
      apiKey: "AIzaSyAd9YrlWJuO_TP2DX8IGGYz3LfWARMlVio",
      authDomain: "kwitter-457e3.firebaseapp.com",
      databaseURL: "https://kwitter-457e3-default-rtdb.firebaseio.com",
      projectId: "kwitter-457e3",
      storageBucket: "kwitter-457e3.appspot.com",
      messagingSenderId: "549105934979",
      appId: "1:549105934979:web:5f472c26a83d486fdcf1b6",
      measurementId: "G-5NWMRYLWK6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("username")
 document.getElementById("username").innerHTML="Welcome "+user_name+"!";
 function AddRoom(){
       var room_name =document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"Adding Room Name"
       });
       localStorage.setItem("room_name",room_name);
       window.location="Kwitter_page.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      var row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
     

      //End code
      });});}
getData();
function redirecttoroomname(name){
      localStorage.setItem("room_name", name );
      window.location="Kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}