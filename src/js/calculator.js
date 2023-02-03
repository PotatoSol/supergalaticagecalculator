//create a user object
// - take in their birthdate


export class User{
  constructor(age){
    this.age = age;
    const MERCURY = .24;
    const VENUS = .62;
    const MARS = 1.88;
    const JUPITER = 11.86;
  }

  calculateAge(yearLength){ //yearLength as a decimal of earth years
    return this.age/yearLength;
  }
}