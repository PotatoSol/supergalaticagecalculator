import {User} from "./../src/js/calculator.js";

function handleAgeSubmit(input, inputUser){
  if(input.length === 0){
    //catch that nothing was put in, and then yell at the user
    console.log('hello');
  }else if(!parseInt(input)){
    //catch if no int was put in?
    console.log('wow!');
  }else{
    inputUser.setAge(input);
  }
}

function handlePlanetSubmit(input){
  
}

function handleFunctionChoice(input){

}

window.addEventListener("load", function(){
  let myUser = new User();
  document.getElementById("ageForm").addEventListener("submit",function(event){
    event.preventDefault();
    handleAgeSubmit(document.getElementById("age").value, inputUser);
  });
  document.getElementById("planetForm").addEventListener("submit", function(event){
    event.preventDefault();
    handlePlanetSubmit(document.getElementById("planet").value);
  });

});