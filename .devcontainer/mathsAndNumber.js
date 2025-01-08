const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);

console.log(balance.toFixed(2)); // output = 100.00
 // tofixed is used to fixed the length of number after decimals.

const otherNumber = 23.89966

// to precise the value but priority is number not decimals
console.log(otherNumber.toPrecision(3)); // output = 23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // converts numbers into indian standards countinf adding commas to numbers output = 10,00,000


//+++++++++++++maths++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4, 6));
console.log(Math.ceil(4,6));
console.log(Math.floor(4, 9));