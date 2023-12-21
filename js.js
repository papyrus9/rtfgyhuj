var firebaseConfig = {
    apiKey: "AIzaSyBgsp9eF0fAVX3_ueFqbShrYjql-pN-k3s",
    authDomain: "valiste-ro.firebaseapp.com",
    databaseURL: "https://valiste-ro-default-rtdb.firebaseio.com",
    projectId: "valiste-ro",
    storageBucket: "valiste-ro.appspot.com",
    messagingSenderId: "82154921300",
    appId: "1:82154921300:web:8e682c006b9987f9f5bcc1",
    measurementId: "G-WF4Y0RSG1J"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="H O L A "+user_name;
  function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);
  //Agregar después de probar que funciona la firebase:
  window.location = "m.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="m.html";
  }

  function logOut()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = ("index.html")
  }