import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqIwFnxfxHbbX4QIQoGO2CfbR7p7OaiJA",
  authDomain: "kwitterproject-15123.firebaseapp.com",
  projectId: "kwitterproject-15123",
  storageBucket: "kwitterproject-15123.appspot.com",
  messagingSenderId: "329586659580",
  appId: "1:329586659580:web:f138e26526e5b71bb74779",
  measurementId: "G-LEE7VG2S7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
    //Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data;
    like = message_data['like'];
    name_with_tag = "<h4>" + name + "<img class = 'user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button = "<button class='btn btn btn-warning' id=" + firebase_message_id + " value = " + like + " onclick= 'updateLike(this.id)'> ";
    span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like : " + like + "</span> </button> </hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
    
    //End code
      } });  }); }
getData();

function updateLike(message_id)
{
    console.log("Clicked on The Like Button" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(like) + 1;
    console.log(updated_likes);
    
    
    firebase.database().ref(room_name).child(message_id).update({ 
        like : updated_likes });
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}