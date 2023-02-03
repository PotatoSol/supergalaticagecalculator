import {User} from "./../src/js/calculator.js";
//import {Game} from "./../src/js/game.js";
function main(input){
  console.log('hello');
  if(input.length === 0){
    console.log('what');
  }
}

window.addEventListener("load", function(){
  document.getElementById("ageForm").addEventListener("submit",function(event){
    event.preventDefault();
    main(document.getElementById("age").value);
  });
});