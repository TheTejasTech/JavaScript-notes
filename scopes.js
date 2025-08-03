//var c = 300;
let a= 300
if (true) {
  let a = 10;
  const b = 20;
  console.log("INNER :  " ,a);
  
}

console.log(a);
//console.log(b);
//console.log(c);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

function one() {
    const username = 'hitesh'

    function two (){
        const website = 'uouo'
        console.log(username);
        
    }
    //console.log(website);
    

    two()
}

//one()

if (true) {
    const username1 ='hitesh'
    if(username1 === 'hitesh '){
        const website1 = 'uouo'
        console.log(username1 + website1);
        
    }
    //console.log(website1);
    
}


//console.log(username1);
//+++++++++++++++++++ interesting +++++++++
addone(5)
function addone(num){
    return num +1
}


const addtwo = function(num){
    return num + 2
}
addtwo(6)
