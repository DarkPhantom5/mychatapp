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


//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id = '" + Room_names + "' onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
                //End code
          });
    });
}
getData();

function log_out() {
    window.location = "index.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}

