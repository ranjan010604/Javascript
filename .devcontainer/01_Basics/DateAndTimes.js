let myDate = new Date()
console.log(myDate);
console.log(myDate.toLocaleDateString()); 
console.log(myDate.toLocaleString()); 
console.log(typeof myDate);

let myNewDate = new Date(2025, 0, 9)
console.log(myNewDate.toDateString());
let myCreatedDate = new Date(2025, 0, 9, 5, 3)
console.log(myCreatedDate.toDateString());

//mm dd yyyy
let myOfcDate = new Date("2025-01-09")
console.log(myOfcDate.toLocaleString());

