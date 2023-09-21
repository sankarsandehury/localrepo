const user ={
    username:'Bapi',
    price:999,
    welcome:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
}
// user.welcome()
// user.username='john';
// user.welcome()
// console.log(this);

// function chai(){
//     let username = 'Bapi';
//     console.log(this.username);   This not use in function only use object
// }
// chai()


// const chai=function(){
//     let username='Bapi'
//     console.log(this.username);
   
// }
// chai();

const chai =()=>{
    let username='Bapi';
    console.log(this);
}
// chai()

// const addTwo=(num1,num2)=>num1+num2;
// const addTwo =(num1,num2)=>(num1+num2)
// console.log(addTwo(5,2));

const addTwo=(num1,num2)=>({username:'Bapi'});
console.log(addTwo(3,4));

