let a = 100  // global scope

if (true) {
let a = 10   // block scope
const b = 20
// console.log("Inner: ", a);
}
//console.log(a);
//console.log(b);
// console.log(a);// output: 30 which is very wrong

//+++++++++++++intresting+++++++++++++++++++
addone(5)
function addone(num) {  
    return num + 1
}



const addTwo = function(num){  
    return num + 2
}
addTwo(5)



//  for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
//  }

function one(){  
    const username = "ranjan"

    function two (){  
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "ranjan"
    if (username === "ranjan") {
        const website = "youtube"
        // console.log(username + website);
    }
    
}
