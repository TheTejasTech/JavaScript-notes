let number = "33ans";
console.log(number);

console.log(typeof number);
let gat = null;

console.log(typeof number);
let value = Number(number);
console.log(typeof value);

/*
console.log(typeof value); sometimes thsi value gives us o/p as NaN means not a number

33abs=> NaN
*/

let num = null;
let n = Number(num);
console.log(n); //this gives op as 0

let islogin = 1;
let boolLogin = Boolean(islogin);
console.log(boolLogin);
/*   for bool values conversion seen as
     true => 1
    false => 0  
    empty string   "" => 0
    complete string  "tea" => 1    */
let numString = 33;
let conNum = String(numString);
console.log(conNum);
console.log(typeof conNum);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);

console.log(11 + 1 + " 3");

console.log(true);
console.log(+true);
console.log(+"");

// link to study https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators
