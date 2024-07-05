function creatPerson(firstName,lastName){
    return{
        firstName,
        lastName,
        getFullName(){
            return `${firstName} ${lastName}`;
        }
    }
}


function main(){
    const firstName = "Vaibhav";
    const lastName = "Kulkarni";

    let person = creatPerson(firstName,lastName); 
    console.log(person.getFullName());
}

main();