let score = 33
console.log(typeof score);
console.log(typeof (score));

let vlaueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" --> 33
//"33abc" --> NaN
//null --> 0
//undefined -->NaN
// true--> 1 , false --> 0

let isLoggedIn = 1 //"" //"lakha"

let booleanIsLoggedIn = boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 --> true; 0 --> false
//"" --> false
//"lakha" --> true

let someNumber = 33

let stringNumber = string(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);