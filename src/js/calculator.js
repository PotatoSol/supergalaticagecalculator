//create a user object
// - take in their birthdate


export class User{
  constructor(age){
    this.age = age;
  }

  calculateAge(yearLength){ //yearLength as a decimal of earth years
    return this.age/yearLength;
  }
}