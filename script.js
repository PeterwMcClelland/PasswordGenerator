var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");

var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");

var num = "0123456789";
var numArr = num.split("");

var sym = "!#$%&\()*+,-./:;<=>";
var symArr = sym.split("");                          


window.onload = alert("Please click 'Generate password' to start!");
function generatePass(){
  
 var allChars = [];
 var resultPass = "";
 var Totlength = prompt("How long would you like your password to be?");

 if(Totlength <8 && Totlength >128){
     alert("Password must be between 8 and 128 characters long!\nPlease start over.");
 }

// Character Conditions
 
 else{
     if(confirm("Would you like your password to contain upper case letters?")){
      Array.prototype.push.apply(allChars, abcUpperArr);
     }
     if(confirm("Would you like your password to contain lower case letters?")){
      Array.prototype.push.apply(allChars, abcLowerArr);
     }
     if(confirm("Would you like your password to have numbers?")){
      Array.prototype.push.apply(allChars, numArr);
     }
     if(confirm("Would you like symbols in your password?")){
      Array.prototype.push.apply(allChars, symArr);
     }
     if(allChars.length===0){
      alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
     }

// Reset Loop

     else{
         for(var i=0; i<Totlength; i++){
             var random = Math.floor(Math.random()*allChars.length);
             resultPass += allChars[random];
         }
     }
     }

// Resolts

     document.getElementById("password").innerHTML = resultPass;
}

document.getElementById('generate').addEventListener('click', generatePass);
