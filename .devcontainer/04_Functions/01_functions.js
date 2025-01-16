// functions 
// console.log("R");
// console.log("A");
// console.log("N");
// console.log("J");
// console.log("A");
// console.log("N");

function myName (){  
    console.log("R");
console.log("A");
console.log("N");
console.log("J");
console.log("A");
console.log("N");
}

myName  //function reference
myName()  // function call

function addTwoNumbers (number1, number2){  // function paramtere number1 and number2

   let result = number1+number2
   return result

    //   return number1+number2
}

const result = addTwoNumbers(3, 10)  // 13  // function arguments

console.log("result:", result);
addTwoNumbers(3, "4")  //34
addTwoNumbers(3, null)   //3

function loginUserMessage(username = "sam") {  
    if (!username) {
        console.log("Please enter valid username ?");
    }
    return `${username} just logged in`
}
loginUserMessage("Ranjan")  // we havent given console log 
console.log(loginUserMessage("Ranjan"));

function calculateCarPrice (val1, val2, ...num1) {   //... rest operator
    return num1
}
console.log(calculateCarPrice(200, 300, 400, 2000)); // 200, 300 goes into val1, val2 and remaining goes into rest oprator in form of array
// output: [400, 2000]


const user = {  
    username: "Ranjan",
    course: "javascript",
    price: 999
}

function handleObject (anyobject) {  
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
  //handleObject(user)
  handleObject({ 
    username:"sam",
    price: 399
  })

  const myNewArray = [200, 300, 500]
  function returnSecondValue (getarray) {  
    return getarray[1]
  }
  //console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([100, 200, 300, 400]));
