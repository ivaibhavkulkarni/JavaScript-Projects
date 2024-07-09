
class Aircraft {
    constructor() {
      this.flying = false;
    }
  
    takeOff() {
      this.flying = true;
    }
  
    land() {
      this.flying = false;
    }
  }
  
  class FighterJet extends Aircraft{
  
    /* Write your code here */
    constructor(missilesLoaded,missilesFired){
        super();
        this.missilesFired = missilesFired;
        this.missilesLoaded = missilesLoaded;
    }
    
  
    fireMissiles(){
        this.missilesLoaded -= this.missilesFired;
        console.log(`${this.missilesFired} Missiles Fired`);
    }
    get missiles(){
        return this.missilesLoaded;
    }
  }
  
  /* Please do not modify anything below this line */
  
  function main() {
    const missilesLoaded = parseInt(readLine());
    const missilesFired = parseInt(readLine());  
    
    const fighterJet = new FighterJet(missilesLoaded, missilesFired);
    
    fighterJet.takeOff();
    fighterJet.fireMissiles();
    console.log(`${fighterJet.missiles} Missiles Left`);
    fighterJet.land();
  }

  main();