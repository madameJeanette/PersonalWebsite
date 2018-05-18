var attempt = 3; // hoeveelheid pogingen om fout te hebben
// de functie hieronder activeert wanner er op de login button wordt geklinkt.
function validate(){
var username = document.getElementById("username").value; //selecteert de username tag en zijn value.
var password = document.getElementById("password").value;  //selecteert de password tag en zijn value.
if ( username == "Admin" && password == "daan12"){  //vergelijkt of value gelijk zijn aan het wachtwoord en de gebruikersnaam
alert ("Login successfully");   //geeft pop up met boodschap dat login is gelukt.
window.location = "succes.html"; // stuurt door naar de pagina wanneer login succesvol.
return false;  //wanneer values niet gelijk aan ww en acc run deze code.
}
else{
attempt --;// haalt poging er af bij één.
alert("You have left "+attempt+" attempt;");

if( attempt == 0){// Disabled de invoer velden na drie pogingen.
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

