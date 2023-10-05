//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

console.log(typeof bigNumber)

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// Stack (Primitive )  , Heap (Non- Primitive)


let myName = "Jeenesh"

let anotherName = myName;

anotherName = "Chai N code"


let user = {
    name:"Jeenesh",
    upi:"jesi@abc.com"

}

let userTwo = user

console.log(anotherName)
console.log(userTwo)
console.log(user)
