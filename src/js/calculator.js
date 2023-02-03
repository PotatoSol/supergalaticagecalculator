//create a user object
// - take in their birthdate


export class User{
  constructor(age){
    this.age = age;
    /*
    this.MERCURY = .24;
    this.VENUS = .62;
    this.MARS = 1.88;
    this.JUPITER = 11.86;
    */
  }

  calculateAge(yearLength){ //yearLength as a decimal of earth years
    return this.age/yearLength;
  }

  calculateYearsSince(){

  }
}