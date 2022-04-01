function Login() {
    window.location ="pagepreference.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyDkRv3CHS361bQg31WfjAmY19ecqfIW154",
    authDomain: "amongussussyimposter-3adea.firebaseapp.com",
    projectId: "amongussussyimposter-3adea",
    storageBucket: "amongussussyimposter-3adea.appspot.com",
    messagingSenderId: "169034816034",
    appId: "1:169034816034:web:113d3469c33c1f896dc87b"
  };

  function Login() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "pagepreference.html";
  }
  