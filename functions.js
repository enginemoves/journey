// 1. Functions:
// Functions are essential in JavaScript. They allow you to define reusable blocks of code that can be executed when called.

// Defining a function:

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('John');  // Output: Hello, John!

function tellTime(use) {
    console.log(`Hello ${use}, this is your assistance for the day how may i help you`)
}

tellTime("Samson")

// Function expressions (Anonymous functions):

const greet2 = function (name) {
    console.log(`Hello, ${name}!`);
};

greet2('John');

let introduction = function (value) {
    console.log(`information is passed into the function form calling the function and adding ${value} to the text`)
}

introduction("name")


// Arrow functions (ES6):

const greet3 = (name) => {
    console.log(`Hello, ${name}!`);
};

greet3('John');  // Output: Hello, John!

// i noticed this one looks like the mocha syntax i use in cypress this one would be easy to remember 

let age = (number) => {
    console.log(`My name is james and i am ${number} years old , i have a bicycle and also a pet fish called jubilee`)
}
age(4)

// in this lesson ive learnt that i can create a function in 3 ways 
// arrow function , function expression , in a variable and also in an array which i would try below

var fruits 
fruits = [{
    meow: function(){
        console.log("This is what i meant i learnt from the above looking forward to implementing it in a task")
        return { 
            info : "this is just me playing around with arrays"

        }
    },
    movie: "kung fu panda"
}, "apple" , "pear"]

// console.log(fruits)
fruits[0].meow()

// previously i was trying to call the function by just doing fruits[0].meow , but i realized to call the function i need to add the ()
console.log(fruits[0].meow().info)

// in the above example i had it like this 
/* fruits = [{
    meow: function(){
        console.log("This is what i meant i learnt from the above looking forward to implementing it in a task")
        let nestedArray = { 
            info : "this is just me playing around with arrays"
        }
    },
    movie: "kung fu panda"
}, "apple" , "pear"]

but when i tried 
console.log(fruit[0].meow().nestedArray.info)
this did not work dues to reasons not really known to me i had to use 'return' which i am not yet familiar with to to get over this challenge and there you have it 
i would read up on how return works
we moveee

*/