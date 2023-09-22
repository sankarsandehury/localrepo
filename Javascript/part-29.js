const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greeting ="Hellow world"
for (const greet of greeting) {
    //console.log(`Each  char is ${greet}`);
}

const map=new Map()
map.set('IN','India');
map.set('USA','united state of america')
map.set('Fr','France')
map.set('UK','United kingdom')
// console.log(map);

for (const [key,value]of map) {
    // console.log(key,':-',value);
}

const myObject ={
    'game1':'NFS',
    'game2':'Spiderman',
    'game3':'bgmi',
    'game4':'cricket'

}

for (const key in myObject) {
    // console.log(`${key} is ${myObject[key]}`);
}


const prog=['js','ruby','python','c++']
for (const key in prog) {
    // console.log(prog[key]);
}

const coding =['js','python','ruby','cpp']
// coding.forEach(function (items) {
//     console.log(items);
// })

// coding.forEach((items)=>{
//  console.log(items);
// })


// function printMe(items){
//     console.log(items);
// }
// coding.forEach(printMe)


// coding.forEach((items,index,arr)=>{
//     console.log(items,index,arr);
// })


const myCoading=[
    {
        lang1:'javascript',
        lang2:'js'
    }
    ,
    {
        lang1:'java',
        lang2:'java'
    },
    {
        lang1:'python',
        lang2:'py'
    }
]

myCoading.forEach((item)=>{
    console.log(item.lang1)
})
