const accountId = 12345
let emailId = "nrm@gmail.com"
var password = "12345"
city = "Pune"
let state

//accountId = 2 // not allowed

emailId = "nm@gmail.com"
password = "12121"
city = "Mumbai"

/* 
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table ([accountId, emailId, password, city, state])