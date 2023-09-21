// const tinderuser=new Object();
const tinderuser = {}
tinderuser.id = '123bcd'
tinderuser.name = "Bapi";
// console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


const regularUser = {
    email: 'bapi@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'Sankar',
            lastname: 'Dehury'
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: 'a',
    2: 'b'
}

const obj2 = {
    3: 'c',
    4: 'd'
}

// const obj3=Object.assign({},obj1,obj2)
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);


const user = [
    {
        id: 1,
        email: 'h@gmail.com'
    },
    {
        id: 2,
        email: 'h@gmail.com'
    },
     {
        id: 3,
        email: 'h@gmail.com'
    }
]

user[1].email

console.log(tinderuser.hasOwnProperty('name'));