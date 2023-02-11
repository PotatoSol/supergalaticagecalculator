import {User} from "./../src/js/calculator.js";

describe ('User', () => {
});
test('Declare a User Object', () =>{
  const myUser = new User();
  expect(myUser).toBeTruthy();
});
test('setAge()', () => {
  const myUser = new User();
  myUser.age = 30;
  expect(myUser.age).toEqual(30);
});
test('calculateAge()', () => {
  const myUser = new User();
  myUser.age = 30;
  expect(myUser.calculateAge(.5)).toEqual(60);
});
test('calculateYearsSince()', () => {
  const myUser = new User();
  myUser.age = 30;
  expect(myUser.calculateYearsSince(10)).toEqual(20);
});
test('calculateYearsUntil()', () => {
  const myUser = new User();
  myUser.age = 30;
  expect(myUser.calculateYearsUntil(40)).toEqual(10);
});
test('setPlanet()', () => {
  const myUser = new User();
  myUser.planet = "mars"
  expect(myUser.planet).toEqual("mars");
});
test('calculatePlanetNumber)', () => {
  const myUser = new User();
  myUser.calculatePlanetNumber();
  expect(myUser.planetNumber).toEqual(-1);
  myUser.planet = "mercury"
  expect(myUser.planetNumber).toEqual(.24);
});
test('setFunctionChoice()', () => {
  const myUser = new User();
  myUser.functionChoice("until");
  expect(myUser.functionChoice).toEqual("until");
});
test('moreYears()', () => {
  const myUser = new User();
  myUser.moreYears = 10;
  expect(myUser.moreYears).toEqual(10);
});
test('doCalculation()', () => {
  const myUser = new User();
  myUser.functionChoice = "convert";
  myUser.age = 20;
  myUser.planet = "mercury";
  expect(myUser.doCalculation()).toEqual(83.33333333333334);

});