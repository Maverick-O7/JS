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
