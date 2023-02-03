import {User} from "./../src/js/calculator.js";

describe ('User', () => {
});
test('Declare a User Object', () =>{
  const myUser = new User(1, 1, 1990);
  expect(myUser).toBeTruthy();
});