//object literals
const mysym =Symbol('key1'); //symbol 
const jsUsr={
    name:'Bapi',
    "full name":'bapi dehury',
    [mysym]:'mykey1',
    age:18,
    location:'Odiasha',
    email:"bapi@gmail.com",
    isloggedin:false,
    lastLoginday:['Monaday',"Tuesday"]
}

// console.log(jsUsr.email);
// console.log(jsUsr['email']);
// console.log(jsUsr['full name']);
// console.log(  jsUsr [mysym]);

// jsUsr.email='dehury@gmail.com'
// Object.freeze(jsUsr);

jsUsr.greeting=function(){
    console.log('Hello js user');
}
jsUsr.greetingtwo=function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(jsUsr.greeting());
console.log(jsUsr.greetingtwo());