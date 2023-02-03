import {User} from "./../src/js/calculator.js";

describe ('User', () => {
});
test('Declare a User Object', () =>{
  const myUser = new User(30);
  expect(myUser).toBeTruthy();
});
test('calculateAge()', () => {
  const myUser = new User(30);
  expect(myUser.calculateAge(.5)).toEqual(60);
});
test('yearsSince()', () => {
  const myUser = new User(30);
  expect(myUser.yearsSince(10)).toEqual(10);
});