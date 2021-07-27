var firebaseConfig = {
    apiKey: "AIzaSyAEqNa5Q24l7ot13Dp6ILYlR2CiMyqW6RI",
    authDomain: "practice1-5970d.firebaseapp.com",
    databaseURL: "https://practice1-5970d-default-rtdb.firebaseio.com",
    projectId: "practice1-5970d",
    storageBucket: "practice1-5970d.appspot.com",
    messagingSenderId: "522251591064",
    appId: "1:522251591064:web:a6691dba2c5afd7c12dfed",
    measurementId: "G-80L865TW7S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function Add_user(){
var User_name=document.getElementById("user_name").value
firebase.database().ref("/").child(User_name).update({
    purpose:"adding user"
})
  }