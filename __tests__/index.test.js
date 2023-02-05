import {User} from "./../src/js/calculator.js";
import "./../src/index.js";

describe ('doCalculation', () => {
});
test('doCalculation', () =>{
  const myUser = new User();
  myUser.setAge(10);
  myUser.setFunctionChoice("convert");
  myUser.setPlanet("mercury");
  expect(doCalculation(myUser)).toEqual(24);

});