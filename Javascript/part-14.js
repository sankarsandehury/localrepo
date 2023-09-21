const myArr=[0,1,2,3,4,5];
const myHero=['ram','krishna'];
const myArr2=new Array(1,2,3,4)
// console.log(myArr2[1]);

//Array Methods
// myHero.push('jagannath');

// myArr.unshift(7)
//myArr.shift()
//console.log(myArr.includes(7));
//console.log(myArr.indexOf(3));


// const newArr=myArr.join()
// console.log(myArr);
// console.log( typeof newArr);


//slice or splice
// console.log("A",myArr);
// const myn1=myArr.slice(1,3)
// console.log(myn1);
// console.log("B" , myArr);

// const myn2=myArr.splice(1,3)
// console.log("C",myArr);
// console.log(myn2);

const marvel=['thor','iron','spiderman'];
const dc=['batman','flash','batman'];
// marvel.push(dc);
// console.log(marvel);

// const all=marvel.concat(dc)
// console.log(all);

// const allheros=[...marvel,...dc];
// console.log(allheros);

const anotherArr=[1,2,3,[4,5,6,],7,[6,7],[4,5]];
const raelanotherArr=anotherArr.flat(Infinity);
// console.log(raelanotherArr);

// console.log(Array.isArray('bapi'));
// console.log(Array.from('bapi'));
// console.log();

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));


