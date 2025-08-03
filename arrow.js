const user = {
    usernamename : 'hitesh',
    price : 654,
    welcomemessage : function () {
        console.log(`${this.username}, wlaome here` );
        console.log(this);
        
    }

}

user.username = 'sam'

//console.log();
console.log(this);
// function chai (){
//     console.log(this);
    
// }
//chai()

// const  chai = function (){
//     let username = 'hitest';
//     console.log(this.username);
    
// }
const  chai = () => {
    let username = 'hitest';
    console.log(this.username);
    
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;

// }
//const addTwo = (num1, num2) =>   num1 + num2;
const addTwo = (num1, num2) =>   ({username : 'hitesh'})

console.log(addTwo(3,4));
const ArrayA = [2,5,6,9]
ArrayA.forEach()