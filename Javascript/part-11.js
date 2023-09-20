const name='bapi';
const number=20;
// console.log(`Hello my name is ${name} and my number is ${number}`);

const gameName=new String('Sankar-sd-com');

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));
const newString=gameName.substring(0,4);
//console.log(newString);

const anotherString=gameName.slice(-8,4);
//console.log(anotherString);

const newStringOne="  bapi   ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url='https://hitesh.com/hitesh%20choudhary'
url.replace("%20","-");
//console.log(url.replace("%20","-"));
//console.log(url.includes('choudhary'));

console.log(gameName.split('-'));


