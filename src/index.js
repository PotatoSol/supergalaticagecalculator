import {User} from "./../src/js/calculator.js";

function main(input){
  if(input.length === 0){
    //catch that nothing was put in, and yell at the user
    console.log('hello');
  }else if(!parseInt(input)){
    //catch if no int was put in?
    console.log('wow!');
  }else{
    console.log('aw');
  }
}

window.addEventListener("load", function(){
  document.getElementById("ageForm").addEventListener("submit",function(event){
    event.preventDefault();
    main(document.getElementById("age").value);
  });
});