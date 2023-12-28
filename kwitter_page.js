//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDaKPnwb9kh7G10p-KSIomVREL5tNcgU5c",
    authDomain: "kwitter-app-c2b37.firebaseapp.com",
    databaseURL: "https://kwitter-app-c2b37-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-c2b37",
    storageBucket: "kwitter-app-c2b37.appspot.com",
    messagingSenderId: "336589562580",
    appId: "1:336589562580:web:c0dc987af9d44570ae5141"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    message = document.getElementById("message").value;
    firebase.database().ref(room_name).push({name:user_name, message:message, like:0});
    document.getElementById("message").value = "";
}

function log_out() {
    window.location = "index.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();