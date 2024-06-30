const accountId = 12345
let accountEmail = "shubham@gmail.com"
var password = "130202"
accountCity = "chennai"
let accountState;
// accountId = 5678 //not allowed beacause it is a constant and can not be changed

console.log(accountId);

/*
prefered not to use var 
beacuse of issue in block scop and functional scope
*/

accountCity = "bengalore"
accountEmail = "lakha@gmail.com"
password = "5421"

console.table({accountCity, accountEmail, password, accountState})