import {User} from "./../src/js/calculator.js";
//import {Game} from "./../src/js/game.js";
function main(input){
  if(input === ""){
    console.log('what');
  }
}

window.addEventListener("load", function(){
  document.getElementById("ageForm").addEventListener("submit",function(event){
    event.preventDefault();
    main(parseInt(document.getElementById("age").value));
  });
});