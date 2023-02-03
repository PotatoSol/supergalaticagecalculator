import {User} from "./../src/js/calculator.js";

function handleSubmit(input){
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

window.addEventListener("load", function(){
  document.getElementById("ageForm").addEventListener("submit",function(event){
    event.preventDefault();
    handleSubmit(document.getElementById("age").value);
    
  });
});