//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3mxMgGGX2U0XYJTajzCswplzmB270SC0",
    authDomain: "kwitter-204f4.firebaseapp.com",
    projectId: "kwitter-204f4",
    storageBucket: "kwitter-204f4.appspot.com",
    messagingSenderId: "885310884267",
    appId: "1:885310884267:web:622db3e827f0ef2532eaee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getusername() {
    var user_name = localStorage.getItem("user_name");
    alert(user_name);
    console.log(user_name);

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
}
getusername();

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name -" + Room_names);
            //row="<div"

            //End code
        });
    });
}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });


    localStorage.setItem("room_name", room_name);

    window.location = "Kwitter_room.html";

}