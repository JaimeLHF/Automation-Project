var config = {
apiKey: "AIzaSyA-vsqet1KAyDYAeSAO4WzrfDNu8QjF3kA",
    authDomain: "automation-49f06.firebaseapp.com",
    databaseURL: "https://automation-49f06-default-rtdb.firebaseio.com",
    projectId: "automation-49f06",
    storageBucket: "automation-49f06.appspot.com",
    messagingSenderId: "915632925437",
    appId: "1:915632925437:web:17452584919bb5c3ef6c94",
    measurementId: "G-ZKZ3JNE952"
};

firebase.initializeApp(config); ////initialize app from firebase




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

