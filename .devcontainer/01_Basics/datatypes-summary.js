// primitive

// 7 types : string , Number, Boolean, null, undefined, Symbol, BigInt

// const score = 200
// const scoreValue = 200.4


// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123');
// console.log(id === anotherId);

// // const bigNumbers = 62663556334566222n

// const heros =["Shaktiman", "nagraj", "doga"]

// let myObj = {
//     name : "Sushmita",
//     age : 22,
// }

// const myFunction = function() {
//     console.log("Hello World");
// }
// // console.log(typeof bigNumbers);
// // console.log(typeof myFunction);
// console.log(typeof outsideTemp);
// console.log(typeof heros);
// console.log(typeof anotherId);

// ++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive) it is copy & heap(non primitive) it is reference

let myYoutubename = "Sushmitapurbey.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "sushmita@google.com"

console.log(userOne.email);
console.log(userTwo.email);
//




// Reference (Non primitive)

//Array, objects, Functions

