// Objects are collection of properties 

let person = {
    name : "Vaibhav",
    age : 25,
    "1" : "value1",
    "my space": "value2"

};

console.log(person)

// Acessing Objects 
// Dot notation
console.log(person.name);

// Bracket Notation

console.log(person["name"]);
console.log(person["1"]);


// Object Desructing 
// To unpack properties from object we use object destructing

let person1 = {
    name_p1 : "Rahul",
    age : 55
};

let {name_p1 , age} = person1;
console.log(name_p1);
console.log(age);

person1.name_p1 = "Vikram";
console.log(person1.name_p1)


// We can assign Object , arrays , function as values 

let vaibhav = {
    age : 25,
    run : function{
        console.log("Running")
    },
    
    habbits : ["Running" , "Cycling"],

    cars : {
        car1 = "Polo",
        car2 = "Audi Etron gt",
        car3 = "Ferrari",
        car4 = "Astron Martin"
    }
};

