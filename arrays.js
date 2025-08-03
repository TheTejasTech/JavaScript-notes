// array

const array = [1, 2, 6, 5, 8, 9, "Tejas "];

console.log(array);

let newArray = new Array(1, 2, 6, 7, 9, 5, "Youtube ");
console.log(newArray);

console.log(newArray[newArray.length - 1]);
console.log(newArray.includes(6));

const arrr = array + newArray;
console.log(arrr);
console.log(typeof arrr);

//slice splice

console.log("A :", array);
const my1 = array.slice(1, 5);
console.log(my1);

const my2 = array.splice(1, 5);
console.log(my2);

console.log(array);

// slice used to get the output of the ptinting format
/// splice used to manipulate the original array
// and removes the entities in the array as described

let marvel = ["thor", "ironman", "spiderman", "black widow"];

let dcmarvel = ["superman", "flash", "batman", "catwoman"];

//marvel.push(dcmarvel);

console.log(marvel);

const heroes = marvel.concat(dcmarvel);
console.log(heroes);

const newHero = [...marvel, ...dcmarvel];
console.log(newHero);

const anotherArray = [1, 2, [3, 4], 5, [6, [7, 8, [1, 5, 9]]]];
const anotherarray = anotherArray.flat(Infinity);
console.log(anotherarray);

console.log(Array.isArray("Tejas"));
console.log(Array.from("Tejas"));
console.log(Array.from({ name: "hitesh" })); //interesting test case teht gives nothing
let score = { 
    score1: 100, 
       score2: 200, 
    score3: 300 };
console.log(Array.of(score.score1, score.score2, score.score3));
