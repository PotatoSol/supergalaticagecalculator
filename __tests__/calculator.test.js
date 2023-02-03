import {User} from "./../src/js/calculator.js";

describe ('User', () => {
});
test('Declare a User Object', () =>{
  const myUser = new User();
  expect(myUser).toBeTruthy();
});
test('setAge()', () => {
  const myUser = new User();
  myUser.setAge(30);
  expect(myUser.age).toEqual(30);
});
test('calculateAge()', () => {
  const myUser = new User();
  myUser.setAge(30);
  expect(myUser.calculateAge(.5)).toEqual(60);
});
test('calculateYearsSince()', () => {
  const myUser = new User();
  myUser.setAge(30);
  expect(myUser.calculateYearsSince(10)).toEqual(20);
});
test('calculateYearsUntil()', () => {
  const myUser = new User();
  myUser.setAge(30);
  expect(myUser.calculateYearsUntil(40)).toEqual(10);
});
test('setPlanet()', () => {
  const myUser = new User();
  myUser.setPlanet("mars");
  expect(myUser.planet).toEqual("mercury");
});
