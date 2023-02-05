//create a user object
// - take in their birthdate

//name of file should probably be user
export class User{
  constructor(){
    this.age = -1;
    this.planet = "void";
    this.functionChoice = "void";
    this.planetNumber = -1;
    this.moreYears = -1;

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

  setPlanet(planet){
    this.planet = planet;
    this.calculatePlanetNumber();
  }

  setFunctionChoice(functionChoice){
    this.functionChoice = functionChoice;
  }

  setMoreYears(moreYears){
    this.moreYears = moreYears;
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

  calculatePlanetNumber(){
    /*
    this.MERCURY = .24;
    this.VENUS = .62;
    this.MARS = 1.88;
    this.JUPITER = 11.86;
    */
    if(this.planet === "mercury"){
      this.planetNumber = .24;
    } else if (this.planet === "venus"){
      this.planetNumber = .62;
    } else if (this.planet === "mars"){
      this.planetNumber = 1.88;
    } else if (this.planet === "jupiter"){
      this.planetNumber = 11.86;
    } else {
      this.planetNumber = -1;
    }
  }

  showResult(){
    
  }
}