function main() {
    const userName = readLine();
    const users = ["Abhiram", "Gabrill", "Mosh", "Alia", "Rehman", "Manoj"];
    
    /* Write your code here */
    const searchUser = () =>{
        return new Promise((resolve,reject) =>{
            if(users.includes(userName)){
                resolve("User Found");
            }
            else{
                reject("User Not Found");
            }
        });
    }
    
    const myPromise = async () =>{
        try{
            const result = await searchUser();
            console.log(result);
        }catch(error){
            console.log(error);
        }
    };
    
    myPromise();
    
  }
main();  