const name = "Sushmita"
const repoCount = 50

// console.log(name +  repoCount +  " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('sushka-jwu-kjn')
// console.log(gameName[0]);
// console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__); //  {} output

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf('w'))

const newString = gameName.substring(1,4);
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "  sushmita"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sushmita.com/sushmita%14purbey"
console.log(url.replace('%14', '-'));
console.log(url.includes('sumit'));

console.log(gameName.split('-'));