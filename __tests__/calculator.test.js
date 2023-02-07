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
  expect(myUser.planet).toEqual("mars");
});
test('calculatePlanetNumber)', () => {
  const myUser = new User();
  myUser.calculatePlanetNumber();
  expect(myUser.planetNumber).toEqual(-1);
  myUser.setPlanet("mercury");
  expect(myUser.planetNumber).toEqual(.24);
  myUser.setPlanet("venus");
  expect(myUser.planetNumber).toEqual(.62);
  myUser.setPlanet("mars");
  expect(myUser.planetNumber).toEqual(1.88);
  myUser.setPlanet("jupiter");
  expect(myUser.planetNumber).toEqual(11.86);
});
test('setFunctionChoice()', () => {
  const myUser = new User();
  myUser.setFunctionChoice("until");
  expect(myUser.functionChoice).toEqual("until");
});
test('moreYears()', () => {
  const myUser = new User();
  myUser.setMoreYears(10);
  expect(myUser.moreYears).toEqual(10);
});
test('doCalculation()', () => {
  const myUser = new User();
  myUser.setFunctionChoice('convert');
  myUser.setAge('20');
  myUser.setPlanet('mercury');
  expect(myUser.doCalculation()).toEqual(10);

});
test('showResults()', () => {

});