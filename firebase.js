const firebaseConfig = {
    apiKey: "AIzaSyA26LOi4tsvDtHsAWS0xWVcgFbT8gUy1oU",
    authDomain: "auto-ba9fe.firebaseapp.com",
    databaseURL: "https://auto-ba9fe-default-rtdb.firebaseio.com",
    projectId: "auto-ba9fe",
    storageBucket: "auto-ba9fe.appspot.com",
    messagingSenderId: "905606421114",
    appId: "1:905606421114:web:a7b0a64d0e9053d8ed79c3",
    measurementId: "G-PE14QQKG0Y"
  };

firebase.initializeApp(firebaseConfig); ////initialize app from firebase




///////////////////////JS////////////////////////////////////////////////




/////////////////Turn on/////////////////////////////////////////////////

function on() {		
    var firebaseRef = firebase.database().ref().child("Led1Status");

        firebaseRef.set("1");                 
}



/////////////////Turn off/////////////////////////////////////////////////

function off() {		
    var firebaseRef = firebase.database().ref().child("Led1Status");

        firebaseRef.set("0");
}



////////////////Functions for hide/show button////////////////////////////


var buttonOn = document.getElementById("on");
var buttonOff = document.getElementById("off");


buttonOn.addEventListener('click', function(){

        buttonOn.style.display = "none";      
        buttonOff.style.display = "block";  
})


buttonOff.addEventListener('click', function(){

    buttonOn.style.display = "block";    
    buttonOff.style.display = "none"; 
})

