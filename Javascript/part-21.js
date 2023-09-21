var c = 30;
if (true) {
    let a = 10;
    const b = 20;
    // console.log(a);
    // console.log(b);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username='bapi';
    function two(){
        const website='toutube';
        console.log(username);
    }
    // console.log(website);
    two()
}
//one()

if(true){
    const username='bapi';
    if(username==='bapi'){
        const website='dehury';
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

console.log(addone(5));
function addone(num){
    return num+1
}
//  console.log(addone(5)); 

addTwo(5)
const addTwo=function(num) {
    return num + 2
} 

// addTwo(5)
