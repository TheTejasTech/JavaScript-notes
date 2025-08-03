//singletone
// literals cant make singleton but constructors can make singleton

//object lliterals
 // Object.create() == makes singletonn
const mySym = Symbol("mykey");
const jsUser = {
    name : 'hotesh',
    agae : 42,
    "location" : "jaipur",
    day : ['mon' , 'tues' , 'wedns'],
    [mySym] : "mykey" ,
    email : 'hitest@openai.com',
};

console.log(jsUser.day);
console.log(jsUser["location"]);
console.log(jsUser["agae"]);  // age is taken as string there

// symbols

//const mySym1 = Symbol("key2");
jsUser.email = "hitest@google.com"
console.log(jsUser.email);

console.log(typeof jsUser["mySym"]);
//Object.freeze(jsUser);
jsUser.agae = 64;
console.log(jsUser);

// functios 

jsUser.greeting = function(){
    console.log('hello js here ');
    
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log('hello js here , ${this.name}');
    
}
console.log(jsUser.greetingTwo());