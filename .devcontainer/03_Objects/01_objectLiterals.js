// singletion

// object literals
const mysys = Symbol("key1")

const jsUser = {   //js function define and fill
    name: "Ranjan",
    "full_name": "Ranjan Kumar",
    age: 20,
    [mysys]: "mykey1",
    location: "bodhgaya",
    email: "email@email.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", " Saturday"]
}

console.log(jsUser.age); // access the age through (.)
console.log(jsUser.name);
console.log(jsUser.location);
console.log(jsUser.isLoggedIn);
console.log(jsUser["full_name"]); // Access the elememt through ([])
console.log(jsUser[mysys]); //synatx to access the symbol datatypes


jsUser.email = "ranjan@kumar.com"
// Object.freeze(jsUser)  // lock the elemnets by using methods called freeze
jsUser.email = "chatgpt@okaxasis.com"  // this email wouldn't display because the above email element is freezed/locked.
console.log(jsUser);

jsUser.greeting = function(){  
    console.log("Hello Ranjan");
}
jsUser.greetingTwo = function(){  
    console.log(`Hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());