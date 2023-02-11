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
  myUser.planet = "mercury"
  expect(myUser.planet).toEqual("mercury");
  myUser.planet = "venus"
  expect(myUser.planet).toEqual("venus");
  myUser.planet = "mars"
  expect(myUser.planet).toEqual("mars");
  myUser.planet = "jupiter"
  expect(myUser.planet).toEqual("jupiter");
});
test('calculatePlanetNumber)', () => {
  const myUser = new User();
  myUser.calculatePlanetNumber();
  expect(myUser.planetNumber).toEqual(-1);
  myUser.planet = "mercury"
  myUser.calculatePlanetNumber();
  expect(myUser.planetNumber).toEqual(.24);
  myUser.planet = "venus"
  myUser.calculatePlanetNumber();
  expect(myUser.planetNumber).toEqual(.62);
  myUser.planet = "mars"
  myUser.calculatePlanetNumber();
  expect(myUser.planetNumber).toEqual(1.88);
  myUser.planet = "jupiter"
  myUser.calculatePlanetNumber();
  expect(myUser.planetNumber).toEqual(11.86);
});
test('setFunctionChoice()', () => {
  const myUser = new User();
  myUser.functionChoice = "until";
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
  myUser.calculatePlanetNumber();
  expect(myUser.doCalculation()).toEqual(83.33333333333334);
  myUser.age = 56;
  myUser.moreYears = 43;
  myUser.functionChoice = "since";
  expect(myUser.doCalculation()).toEqual(54.16666666666667);
  myUser.moreYears = 61;
  myUser.functionChoice = "until";
  expect(myUser.doCalculation()).toEqual(20.833333333333336);
  myUser.functionChoice = "error";
  expect(myUser.doCalculation()).toEqual(-1);
});