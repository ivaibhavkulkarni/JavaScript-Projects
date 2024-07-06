function main() {

    const objectEntities = [
      {
        shape: "circle",
        color: "Green"
      },
      {
        shape: "circle",
        color: "White"
      },
      {
        shape: "triangle", 
        color: "Orange"
      }
    ];
    
    const shape = readLine();
    
    /* Write your code here and log the output */
    let arrayOfObjectsWithShape = [];
    objectEntities.forEach(obj =>{
        if(obj.shape === shape){
            arrayOfObjectsWithShape.push(obj);
        }
    });
    console.log(arrayOfObjectsWithShape);
    
  }

  main();