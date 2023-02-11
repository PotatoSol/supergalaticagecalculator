import {User} from "./../src/js/calculator.js";
import "./../src/js/index.html";
//import './css/styles.css';
//need to take out all ui logic and move it into another fiilenpx
function handleAgeSubmit(input, inputUser){
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

function handlePlanetSubmit(input, inputUser){
  inputUser.planet = input;
  inputUser.calculatePlanetNumber();
}

function handleFunctionChoiceSubmit(input, inputUser){
  inputUser.functionChoice = input;
}
function handleMoreYearsSubmit(input, inputUser){
  inputUser.moreYears = input;
}

function checkInputs(user){
  console.log('entered');
  if(user.age === -1 || user.planet === "void" || user.functionChoice === "void"){
    return false;
  } else {
    if(user.functionChoice == "since" || user.functionChoice == "until"){
      showMoreYears();
    } else {
      user.doCalculation();
      return true;
    }
  }
}

/*
export function doCalculation(user){
  let returnNumber = 0;
  if(user.functionChoice === "convert"){
    //do convert
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
  return returnNumber;
}
*/

function showMoreYears(){
  document.getElementById('moreYearsUntil').setAttribute("class", "notHidden");
  document.getElementById("functionForm").setAttribute("class", "hidden");
  document.getElementById("planetForm").setAttribute("class", "hidden");
  document.getElementById("ageForm").setAttribute("class", "hidden");
}

function revertShowMoreYears(){
  document.getElementById('moreYearsUntil').setAttribute("class", "hidden");
  document.getElementById("functionForm").setAttribute("class", "notHidden");
  document.getElementById("planetForm").setAttribute("class", "notHidden");
  document.getElementById("ageForm").setAttribute("class", "notHidden");
}

function showErrorMessage(value){
  if(value === 1){
    document.getElementById('ageError').setAttribute("class", "error");
    document.getElementById('ageError').innerText = "Nothing entered, please input your age";
  } else if (value === 2){
    document.getElementById('ageError').setAttribute("class", "error");
    document.getElementById('ageError').innerText = "Non-number entered, please input your age";
  } else { 
    document.getElementById('ageError').setAttribute("class", "hidden");
    document.getElementById('ageError').innerText = "";
  }
}


let myUser = new User();
document.getElementById("ageForm").addEventListener("submit",function(event){
  event.preventDefault();
  handleAgeSubmit(document.getElementById("age").value, myUser);
  checkInputs(myUser);
});
document.getElementById("planetForm").addEventListener("submit", function(event){
  event.preventDefault();
  handlePlanetSubmit(document.getElementById("planet").value, myUser);
  checkInputs(myUser);
});
document.getElementById("functionForm").addEventListener("submit", function(event){
  event.preventDefault();
  handleFunctionChoiceSubmit(document.getElementById("function").value, myUser);
  checkInputs(myUser);
});
document.getElementById("moreYearsUntil").addEventListener("submit", function(event){
  event.preventDefault();
  handleMoreYearsSubmit(document.getElementById("moreYears").value, myUser);
});
