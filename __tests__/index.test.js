import {User} from "./../src/js/calculator.js";
import {doCalculation} from "./../src/index.js";
import "./../src/css/styles.css";

describe ('doCalculation', () => {
});
test('doCalculation', () =>{
  const myUser = new User();
  myUser.setAge(10);
  myUser.setFunctionChoice("convert");
  myUser.setPlanet("mercury");
  expect(doCalculation(myUser)).toEqual(24);
});
