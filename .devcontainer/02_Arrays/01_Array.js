// Array decleration
const myArr = [0, 1, 2,3, 4, 5, 6]
console.log(myArr);
const myHeros = ["Hanuman", "SriRam"]
// declearing new arrays
const myArr2 = new Array(1, 2, 3, 4)
// Accessing the Arrays Element
console.log(myHeros[0]);

// Arrays Methods //

// 01 Adding the array elements in the last of the array by method called push method
myArr.push(7)
console.log(myArr);

//02 Removing last value of the Array by method called pop
myArr.pop()
console.log(myArr);

// 03 adding the array element in the begning of the array by unshift method
myArr.unshift(9)
console.log(myArr);

// 04 removing array element from the begning of the the Array by method called shift

myArr.shift()
console.log(myArr);

// 05 check the array element that is present in the array or not by method called includes

console.log(myArr.includes(9));

//06 Check the elememt of respective index by using method called indexof
console.log(myArr.indexOf(3));

// 07 to change the type of array in string by using method called join

const newArr = myArr.join();
console.log(myArr); 
console.log(typeof newArr);

//slice & splice
console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
console.log("B", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);

// splice manupulate the arrays, its change the array by withdrawing the range of splice out of oringinal array