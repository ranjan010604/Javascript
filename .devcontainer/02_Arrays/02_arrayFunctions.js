const marvel_heroes = ["thor", "spiderman", "ironman"]
const dc_heroes = ["flash", "batman", "superman"]

// marvel_heroes.push(dc_heroes)  //push dec_heroes inside the marvel_heroes using push operation

console.log(marvel_heroes); //output is array under array becaus ejs aaray can access any types of element , so that array of dc_heroes it trated as an element.
console.log(marvel_heroes[3][1]); // to acces the elemet of arraya under array

const newHeroes = marvel_heroes.concat(dc_heroes)  //concat returns new array and can be stored into new variables
console.log(newHeroes);

const all_newHeroes = [...marvel_heroes, ...dc_heroes]  // spread opeartor method is used to spread the elemts of the arrays
console.log(all_newHeroes);

// both spread and concat operator are same but spread is frequently used operator now days

const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)  // flat function is used to combines various array elements into the given depth ... here it is infinity so it combine the array into one array.
console.log(real_another_array);

console.log(Array.isArray("Ranjan"));  // to check the given function is array or not
console.log(Array.from("Ranjan")); // convert into array using from method
console.log(Array.from({name: "ranjan"}));  // intresting becuase it cann not directly convrt a class into array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));// convert an elements into array by using method array.of