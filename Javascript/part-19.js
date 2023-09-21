// function addtwonumber(number1,number2){
//     console.log(number1+number2);
// }

function addtwonumber(number1,number2){
//   let result=number1+number2
//   return result;

return number1+number2
}
const result=addtwonumber(5,2);
// console.log('Result:',result);

function userLogin(username){
    if(username===undefined){
        console.log('Please enter a username');
        return
    }
    return `${username} just logged in`
}

console.log(userLogin());

