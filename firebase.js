var config = {
    apiKey: "AIzaSyCdNN5XeUaLOXq8SpscugpsywxsJgcYEtA",
    authDomain: "teste005-18c6c.firebaseapp.com",
    projectId: "teste005-18c6c",
    storageBucket: "teste005-18c6c.appspot.com",
    messagingSenderId: "766477992738",
    appId: "1:766477992738:web:d8585841f1409fb5e8db7b",
    measurementId: "G-LHGLVXZ3FL"
  };

firebase.initializeApp(config);

function ligar() {
		
    var firebaseRef = firebase.database().ref().child("Led1Status");  
    
   
        firebaseRef.set("1"); 
            
        


}

function desligar() {
		
    var firebaseRef = firebase.database().ref().child("Led1Status");

        firebaseRef.set("0");

}




var buttonLigar = document.getElementById("ligar");
var buttonOff = document.getElementById("desligar");

buttonLigar.addEventListener('click', function(){
   
        buttonLigar.style.display = "none";
      
        buttonOff.style.display = "block";  
     
})


buttonOff.addEventListener('click', function(){
   
    buttonLigar.style.display = "block";
    
    buttonOff.style.display = "none";  

 
})


function hidden(){
    
}