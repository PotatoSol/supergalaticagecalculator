import {User} from "./../src/js/calculator.js";
import './css/styles.css'

function handleAgeSubmit(input, inputUser){
  if(input.length === 0){
    //catch that nothing was put in, and then yell at the user
    console.log('hello');
    //document.getElementById('ageError').setAttribute('class', "notHidden");
  }else if(!parseInt(input)){
    //catch if no int was put in?
    console.log('wow!');
  }else{
    inputUser.setAge(input);
  }
}

function handlePlanetSubmit(input, inputUser){
  inputUser.setPlanet(input);
}

function handleFunctionChoiceSubmit(input, inputUser){
  inputUser.setFunctionChoice(input);
}

window.addEventListener("load", function(){
  let myUser = new User();
  document.getElementById("ageForm").addEventListener("submit",function(event){
    event.preventDefault();
    handleAgeSubmit(document.getElementById("age").value, myUser);
    console.log(myUser.age);
  });
  document.getElementById("planetForm").addEventListener("submit", function(event){
    event.preventDefault();
    handlePlanetSubmit(document.getElementById("planet").value, myUser);
    console.log(myUser.planet);
  });
  document.getElementById("functionForm").addEventListener("submit", function(event){
    event.preventDefault();
    handleFunctionChoiceSubmit(document.getElementById("function").value, myUser);
    console.log(myUser.function);
  });
});