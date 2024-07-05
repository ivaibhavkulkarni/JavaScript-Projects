function person(firstName,lastName){

    this.firstName = firstName,
    this.lastName = lastName,
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}


function main(){
    const firstName = "Kalki";
    const lastName = "Kulkarni";

    let person1 = new person(firstName,lastName);
    console.log(person1.getFullName());

}

main();