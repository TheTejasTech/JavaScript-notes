//Dates 
let myDate= new Date();
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);

//let myDates= new Date(2025 , 0 , 6);
let myDates= new Date("2025-01-14");
console.log(myDates.toDateString());

let times = Date.now();
console.log(times);
console.log(myDates.getTime());

let newDate= new Date()
console.log(newDate.getMonth + 1);
console.log(newDate.getDay);

newDate.toLocaleString(  'default' ,{
   weekday : "long",
   
})