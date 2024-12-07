// let fruit = ["apple", "orange" , "pineapple", "stick","breeze"]
// fruit[1] = "goat"
// fruit.push="cow"
// console.log(fruit)   

//family as an Object

let muddle
muddle = [
    {
        childName: "Martins",
        married: false,
        age: 24,
        gender: "M",
        club: "Chelsea"
    },
    {
        childName: "Samuel",
        married: false,
        age: 18,
        gender: "M",
        state: "Abuja",
        club: "Man City"
    },
    {
        childName: "Sunday",
        married: false,
        age: 16,
        gender: "M",
        state: "Kaduna"
    }
]

console.log(muddle[0].childName)
console.log(muddle[1].childName)
console.log(muddle[2].childName)
muddle[0].childName = "Smart"
console.log(muddle[0].childName)

//to add new property to an object 
muddle[0].email = "hello@gmail.com"
console.log(muddle[1])

Object.assign(muddle[1], {
    email: "hello2@gmail.com", 
    church: "CAC"
})

console.log(muddle[1])

console.log(muddle)


// let age = [muddle[0].age , muddle[1].age ,muddle[2].age]
// console.log(age)
// age.shift() // remove first age which is 18 
// console.log(age)
// age.unshift("99") // add first age which is 18 
// console.log(age)
// age.push("6") // add 6 at the array
// console.log(age)