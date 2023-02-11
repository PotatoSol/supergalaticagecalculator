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
  
  doCalculation(){
    let returnNumber = 0;
    if(this.functionChoice === "convert"){
      //do convert
      returnNumber = this.age/this.planetNumber;
    } else if (this.functionChoice === "since"){
      //do since
      //have to grab another input
      returnNumber = (this.age - this.moreYears)/this.planetNumber;
    } else if (this.functionChoice === "until"){
      //do until
      //have to grab another input
      returnNumber = (this.moreYears - this.age)/this.planetNumber;
    } else {
      //should never happen, throw error message?
      returnNumber = -1;
    }
    return returnNumber;
  }
}