
console.log("Tejas")
 
console.log(typeof "Tejas");

console.log("typeof null"+typeof null); //object
console.log("typeof undefined"+typeof undefined); //undefined

//alert(3+3);

// number 2 to power 53 or 54
// bigInt 

// string=""
// boolean=true/false
// null 
// undefined
// symbol unique
   
//"use strict";
// let acccountId=45468;
// console.log(acccountId);

let number=Symbol('1234');
let anothernumber=Symbol('1234');
console.log(number===anothernumber);
//these ids look same but they are not same because symbols cant be same
let bigNumber=13548941518215667897415n;//write n after big numbers
//non primitive datatypes are giving the type of object
let heros=['alex','erik','jose'];
console.log(heros);

//object defining
let myObj={
    nameof:"tejas",
    age:20,
    
}
//functions return type as functions only
const myfunction= function (){
    console.log("hello world");
    
}

//primitive datatypes stored into stack whereas non primitive stored in the heap

let tyname="tejasstech";
let newname=tyname;

newname='kaykeur';
console.log(tyname);
console.log(newname);
//changing after declaration wont change into stack for primitive datatypes
//it gives copy of the variable declared earlier
let employee1={
    email: "me@viit.com",
    upi : "me@ybl",
}

let employee2= employee1;

employee2.email="my@viit.com";

console.log(employee1);
console.log(employee2);
//values get changed after the declaration into heap they give real instance