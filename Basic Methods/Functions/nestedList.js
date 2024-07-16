
function main() {
    const nestedArray = JSON.parse(readLine());
  
    /* Write your code here */
    const result = nestedArray.map(subArray =>{
        
        const hasEven = subArray.some(value => value % 2 === 0);
        
        if(hasEven){
            return subArray.reduce((product,value) => product * value);
        }
        else{
            return 0;
        }
    });
    console.log(result);
  }
main();  