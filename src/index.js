import {User} from "./../src/js/calculator.js";
import './css/styles.css';

export function handleAgeSubmit(input, inputUser){
  if(input.length === 0){
    //catch that nothing was put in, and then yell at the user
    showErrorMessage(1);
  }else if(!parseInt(input)){
    //catch if no int was put in?
    showErrorMessage(2);
  }else{
    showErrorMessage(3);
    inputUser.setAge(input);
  }
}

export function handlePlanetSubmit(input, inputUser){
  inputUser.setPlanet(input);
}

export function handleFunctionChoiceSubmit(input, inputUser){
  inputUser.setFunctionChoice(input);
}

export function checkInputs(user){
  if(user.age === -1 || user.planet === "void" || user.functionChoice === "void"){
    return false;
  } else {
    doCalculation(user);
    return true;
  }
}

export function doCalculation(user){
  let returnNumber = 0;
  if(user.functionChoice === "convert"){
    //do convert
    console.log('hey');
    returnNumber = user.age/user.planetNumber;
  } else if (user.function === "since"){
    //do since
    //have to grab another input
  } else if (user.function === "until"){
    //do until
    //have to grab another input
  } else {
    //should never happen, throw error message?
  }
  console.log(user.age);
  console.log(user.planetNumber);
  console.log(user.functionChoice);
  return returnNumber;
}

export function showErrorMessage(value){
  if(value === 1){
    document.getElementById('ageError').innerText = "Nothing entered, please input your age";
  } else if (value === 2){
    document.getElementById('ageError').innerText = "Non-number entered, please input your age";
  } else { 
    document.getElementById('ageError').innerText = "";
  }
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