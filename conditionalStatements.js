// // Control flow structures like if statements and loops help you direct the flow of your program based on conditions.
// let age = 18;
// if (age >= 18) {
//     console.log('Adult');
// } else {
//     console.log('Minor');
// }

// let students 
// students = [{
//     name : "Johnson",
//     age: 17
// },{
//     name : "Dave",
//     age: 22
// },{
//     name : "Anuoluwa choke",
//     age: 19
// }]

// num = 1
// if(students[num].age < 18){
//     console.log(`${students[num].name} is not 18 years old`)
// } else{
//     console.log(`${students[num].name} is qualified for the scholarship`)
// }

//  num = 2
// if (students[num].age <= 18){
//     console.log(`${students[num].name} you are qualified to move to the next class because you are not above 18`)
// } else if (students[num].age > 18 && students[num].age <= 20 ){
//     console.log(`${students[num].name} are almost above age to go into the next class `)
// } else{
//     console.log(`${students[num].name} are above 20 years you are double promoted`)
// }

// let me try the example from the error handling here since i am here 
// num = 4
// try {
//     if(students[num].age < 18){
//         console.log(`${students[num].name} is not 18 years old`)
//     } else{
//         console.log(`${students[num].name} is qualified for the scholarship`)
//     }
//     } catch(error){
//         console.log("Student is not in the academy")
//     }

// it worked yippeeeeee 

// moving to switches
//Used when you want to compare a value against multiple possible cases.
// let fruit = "ebear";

// switch (fruit) {
//   case "apple":
//     console.log("You chose apple.");
//     break;
//   case "banana":
//     console.log("You chose banana.");
//     break;
//   default:
//     console.log("Unknown fruit.");
// }

//using switch for the student example would be 
let students 
students = [{
    name : "Johnson",
    age: 17
},{
    name : "Dave",
    age: 22
},{
    name : "Anuoluwa choke",
    age: 19
}]

let num = 1 
let age = 20
switch(age){
    case students[num].age <= 18 :
        console.log(`${students[num].name} you are promoted to the next class you are 18`)
    break;
    case students[num].age > 18 && students[num].age < 20 :
    console.log(`${students[num].name} you are double promoted as you are older than 18 years`)
    break;
    case students[num].age > 18 && students[num].age < 20 :
    console.log(`${students[num].name} you are too old to be here `)
    break 
    default:
        console.log("visit the principals office")
}