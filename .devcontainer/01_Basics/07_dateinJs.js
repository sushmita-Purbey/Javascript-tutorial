let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 7,55)
let myCreatedDate =new Date("2024-10-14")
console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log((newDate.getDate()));
console.log((newDate.getDay()));
console.log((newDate.getHours()));
console.log((newDate.getMinutes()));
