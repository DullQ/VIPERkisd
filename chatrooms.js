Darkmode="";
Lightmode="";
Generic="";

function DARK() {
    Darkmode="1";
    window.location="options.html";
}
function MAIN() {
    Generic="1";
    window.location="options.html";
}
function LIGHT() {
Lightmode="1";
    window.location="options.html";
}

if(Darkmode == [1])
{
   backgroundColor = grey;
}

var firebaseConfig = {
    apiKey: "AIzaSyDkRv3CHS361bQg31WfjAmY19ecqfIW154",
    authDomain: "amongussussyimposter-3adea.firebaseapp.com",
    projectId: "amongussussyimposter-3adea",
    storageBucket: "amongussussyimposter-3adea.appspot.com",
    messagingSenderId: "169034816034",
    appId: "1:169034816034:web:113d3469c33c1f896dc87b"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();

  function Impasta() {
      window.location="actualchat.html";
  }
function logerout() {
 window.location="chatrooms.html" 
}
