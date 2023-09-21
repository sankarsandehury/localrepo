function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300));

const user={
    username:'Bapi',
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:'sam',
    price:699
})

const myArr=[200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([200,300,400]));