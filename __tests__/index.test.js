import {User} from "./../src/js/calculator.js";
import "./../src/index.js";
import "./css/styles.css";

describe ('doCalculation', () => {
});
test('doCalculation', () =>{
  const myUser = new User();
  myUser.setAge(24);
  myUser.setFunctionChoice("convert");
  myUser.setPlanet("mercury");
  expect(doCalculation(myUser)).toEqual(100);
});
describe ('checkInputs', () => {
});
test('checkInputs', () =>{
  const myUser = new User();
  expect(checkInputs(myUser)).toEqual(false);
  myUser.setAge(24);
  myUser.setFunctionChoice("convert");
  myUser.setPlanet("mercury");
  expect(checkInputs(myUser)).toEqual(true);
});
