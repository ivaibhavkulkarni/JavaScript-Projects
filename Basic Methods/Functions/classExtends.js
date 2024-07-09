
class Animal {
  
    /* Write your code here */
    constructor(species,age){
        this.species = species;
        this.age = age;
    }
    
    eat(){
        console.log(`${this.species} is eating`);
    }
  
  }
  
  class Tiger extends Animal {
    constructor(species, age) {
      super(species);
      this.age = age;
    }
  
    hunt() {
      console.log(`A ${this.age} years old ${this.species} is hunting`);
    }
  
    roar() {
      console.log(`${this.species} is roaring`);
    }
  }
  
  /* Please do not modify anything below this line */
  
  function main() {
    const species = readLine();
    const age = parseInt(readLine());
    
    const tiger1 = new Tiger(species, age);
  
    tiger1.eat();
  }

  main();