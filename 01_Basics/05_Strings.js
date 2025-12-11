const name = "abc"
const repoCount = 50

console.log(name+repoCount+"value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("Assassian")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));
console.log(gameName.lastIndexOf('s'));

const newString = gameName.substring(3, 9)
console.log(newString); //from 3rd to 9th char

const anotherString = gameName.slice(-9, 4)
console.log(anotherString); //from 0 to 4. As -9 substracts 9 characters from string length and make it as start position

const anotherString2 = gameName.slice(-4, 4)
console.log(anotherString2); //from 5th to 4th. Hence, no result

const newStringOne = "   abc   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "www.abc%20xyz.com"
console.log(url.replace('%20', '-'));
console.log(url.includes('abc'));

console.log(gameName.split('a'));