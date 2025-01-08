const name = "Ranjan"
const repoCount = 50
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('Ranjanish')
console.log(gameName[0]); //gamename indexes
console.log(gameName. __proto__); // types of gameName

console.log(gameName.length); // string length of gameName
console.log(gameName.toUpperCase()); // change string into uppercase
console.log(gameName.charAt(5));  // check character at indes 5 using charAt
console.log(gameName.indexOf('s')); // check at what index the character stand at in the 
const newString = gameName.substring(0, 4)  // substring slice the strung into given indexes
console.log(newString);
const anotherString = gameName.slice(-9, 4)
console.log(anotherString); // slice use for both forward and backward slicing.
const newStrignOne = "  ranjan  "
console.log(newStrignOne);
console.log(newStrignOne.trim()); // remove extra spaces from stsrting and ending..

const url = "https://ranjan.com/ranjan%20kumar"
console.log(url.replace('%20', '-')); 

console.log(url.includes('sundar'));
console.log(gameName.split('_'));