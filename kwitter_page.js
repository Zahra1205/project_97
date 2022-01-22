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
    var user_name =localStorage.getItem("username");
    var room_name=localStorage.getItem("room_name");
    function send(){
          var msg=document.getElementById("msg").value;
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
console.log(message_data);
name = message_data["name"];
message= message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'> "+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span></button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;


//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function update_like(message_id){
button_id=message_id;
var likes=document.getElementById(button_id).value;
var updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});
}