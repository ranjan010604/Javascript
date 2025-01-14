// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123yewfyj"
tinderUser.name = "priti"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regulerUser = { 
    fullname: { 
        userfullname: {  
            firstname: "Ranjan",
            lastname: "kumar"
        }
    }
}
console.log(regulerUser.fullname?.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// //const obj3 = { obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)  // assign operator
const obj3 = {...obj1, ...obj2}   // spraed operator
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // to check whether this property exist or not