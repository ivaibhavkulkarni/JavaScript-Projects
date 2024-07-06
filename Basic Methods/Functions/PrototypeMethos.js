
function Travel(kit, item) {
    this.kit = kit;
    this.item = item;
  }
  
  Travel.prototype.isKitContainsItem = function(){
      return this.kit.includes(this.item);
  };
  
  
  function main() {
    const travelBag = {
      ticket : "Hyderabad-Vizag",
      clothes: ["Shirt", "T-Shirt","Jeans"],
      medicines: "Paracetamol",
      waterBottle: true,
      snacks:true
    };
    
    const item = readLine();
    
    const travelKit = Object.getOwnPropertyNames(travelBag);    
    const travel = new Travel(travelKit, item);
  
    
    console.log(travel.isKitContainsItem());
  }

  main();