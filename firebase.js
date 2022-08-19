var config = {
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////Your script from firebase///////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
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

