import {User} from "./../src/js/calculator.js";

function handleAgeSubmit(input){
  if(input.length === 0){
    //catch that nothing was put in, and yell at the user
    console.log('hello');
  }else if(!parseInt(input)){
    //catch if no int was put in?
    console.log('wow!');
  }else{
    console.log('aw');
    //show next section
    //hide this section
  }
}

function handlePlanetSubmit(input){
  console.log(input);
}

window.addEventListener("load", function(){
  document.getElementById("ageForm").addEventListener("submit",function(event){
    event.preventDefault();
    handleAgeSubmit(document.getElementById("age").value);
  });
  document.getElementById("planetForm").addEventListener("submit", function(event){
    event.preventDefault();
    handlePlanetSubmit(document.getElementById("planet").value);
  });
});