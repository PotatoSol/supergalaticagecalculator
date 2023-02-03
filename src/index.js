import {User} from "./../src/js/calculator.js";
//import {Game} from "./../src/js/game.js";
function main(input){
  console.log(input);
}

window.addEventListener("load", function(){
  console.log('hehe')
  document.getElementById("ageForm").addEventListener("submit",function(event){
    event.preventDefault();
    main(parseInt(document.getElementById("age").value));
  });
});