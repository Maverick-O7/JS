// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 243244564647643532n

// Reference (Non-primitive)

// Array, Objects, Functions

// Array

const heroes = ["Captain America", "Iron man", "Hulk"];

// Object
let user = {
    name : "abc",
    age : 22
}

const myFunction = function() {
    console.log("Hello");
    
}

console.table([user]);
console.table([heroes]);

console.log(typeof bigNumber);
console.log(typeof outsideTemp); //null returns data type as "object"
console.log(typeof myFunction);
console.log(typeof heroes);
console.log(typeof anotherId);


/*      Memory       */

// Stack (Primitive) , Heap (Non-Primitive)

let myName = "pqr"
let anotherName = myName
anotherName = "xyz"

console.log(myName);
console.log(anotherName);
console.table([myName, anotherName])

let user1 = {
    email : "user@google.com",
    upi : "user@ybl"
}

console.log(user1.email);


let user2 = user1 

user2.email = "user2@google.com"

console.table([user2.email,user1.email])
