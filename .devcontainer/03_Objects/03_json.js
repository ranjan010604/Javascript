// destructure
const course = {  
    coursename: "javascript hindi",
    price: "999",
    courseinstrsctor: "Ranjan"
}

//course.courseinstrsctor = {courseinstructor} = course
const {courseinstrsctor: instructor} = course
//console.log(courseinstrsctor);
console.log(instructor);

// {   
//     "name": "ranjan",
//     "coursename": "javascript",
//     'price': 999
// }

[
    {},
    {},
    {}
]