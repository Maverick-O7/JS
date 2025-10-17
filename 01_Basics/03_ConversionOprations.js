let score = "44"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber);

// "44" => 44
// "44abc" => NaN (not a number)
// true => 1; false => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "abc" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(someNumber);
console.log(typeof stringNumber);

/* Operations */

let value = 4
let negValue = -value

console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(13%3);


let str1 = "hello"
let str2 = " abc"

let str3 = str1 + str2 
console.log(str3);

console.log(1 + "2");
console.log("1" + 2);
console.log(1+2+"2");
console.log("1"+2+2 );

console.log(+true);
console.log(+"");

let gameCounter = 100
gameCounter++
console.log(gameCounter);
