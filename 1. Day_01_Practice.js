// Syntax for Printing anything on the console : console.log()
console.log("This is SK's Journey in JS")
// O/P - This is SK's Journey in JS

// creating Variables and storing values in them : var variable_name = value
var is_a_string = "Hello"
console.log(is_a_string)
// O/P - Hello
var is_a_number = 12345
console.log(is_a_number)

// O/P - 12345
var is_a_boolean = true
console.log(is_a_boolean)
// O/P - true

// accessing specific character in a string
var car = "Ferrari"
console.log(car[2])
//O/P - r

// JS has 7 Immutable Primitive datatypes : String, Number, BigInt (less often used), Boolean, Null, Undefined, Symbol(rarely used) 
console.log("Hello") // string
// O/P - Hello
console.log(5) // number - range : 25^(3) - 1 > this == BigInt
// O/P - 5
console.log(true,false) // boolean
// O/P - true false
console.log(undefined)
// O/P - undefined
console.log(null)
// O/P - null

// JS has 2 Non-Primitive datatypes : Objects and Array

// array
var array_direct = [1,2,3,4,5]
console.log(array_direct)
// O/P -   (5) [1, 2, 3, 4, 5]
//         0: 1
//         1: 2
//         2: 3
//         3: 4
//         4: 5
//         length: 5
//         [[Prototype]]: Array(0)

// accessing specific elements of the array using Index
console.log(array_direct[1])
// O/P - 2
console.log(array_mixed[2],array_mixed[4])
// O/P - true null

var array_mixed = [1,"Sri Krishna",true,undefined,null]
console.log(array_mixed)

// O/P -   (5) [1, 'Sri Krishna', true, undefined, null]
//         0: 1
//         1: "Sri Krishna"
//         2: true
//         3: undefined
//         4: null
//         length:5
//         [[Prototype]]:Array(0)

// Object
// Key and Values are used in Object and the keys must be unique and shouldn't be a copy of other key
var is_a_object = {
    name: "Sri Krishna",
    age: 22,
    gender: "Male",
    indian: true
//  "Who am I?" : "My name is Sri Krishna" : works onky on browsers
}
console.log(is_a_object)
//    O/P -    {name: 'Sri Krishna', age: 22, gender: 'Male', indian: true}
//             age: 22
//             gender: "Male"
//             indian:true
//             name:"Sri Krishna"
//             [[Prototype]]: Object
console.log(is_a_object.name) // elements of an object are accessed using dot operators(.)
// O/P - Sri Krishna
