function sayName(){
    console.log('h');
    console.log('i');
    console.log('t');
    
}

//sayName()
function addT(num1,num2){
    //console.log(num1+num2);
    let res = num1+num2
    return res;
    return num1+num2;
}
const result = addT(3,3)
console.log("Result: ",result);

addT('3','a')

function loginUser(userName){
    if(userName === undefined){
        console.log("plese enter a username ");
        return
    }
    return `${userName} just logged in`
}
console.log(loginUser( ));

function calcuPrice(val1,val2,...numb1){
    return numb1;
}
console.log(calcuPrice(200,400,500,700,800,900));

function handleObject(anyObj){
    console.log(`username is ${anyObj.userName} and price is ${anyObj.calcuPrice}`);
    
}

handleObject(userName)

