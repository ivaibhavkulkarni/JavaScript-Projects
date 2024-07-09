function main() {
    const isResourceAvailable = JSON.parse(readLine());
    
    /* Write your code here */
    const myPromise = new Promise((response,reject) =>{
        isResourceAvailable ? response("Tree Planted") : reject("Resource not available");
    });
    
    myPromise
          .then((response) =>{
              console.log(response);
          })
          .catch((error) =>{
              console.log(error);
          });
  }
  