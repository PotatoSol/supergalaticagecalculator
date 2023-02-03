//create a user object
// - take in their birthdate

//name of file should probably be user
export class User{
  constructor(){
    this.age;
    /*
    this.MERCURY = .24;
    this.VENUS = .62;
    this.MARS = 1.88;
    this.JUPITER = 11.86;
    */
  }

  setAge(age){
    this.age = age;
  }

  calculateAge(yearLength){ //yearLength as a decimal of earth years
    return this.age/yearLength;
  }

  calculateYearsSince(targetYear){
    return this.age - targetYear;
  }

  calculateYearsUntil(targetYear){
    return targetYear - this.age;
  }
}