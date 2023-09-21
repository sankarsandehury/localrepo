// Immediately invoked function expression (IIFE)

(function chai(){
    //named iife
    console.log('db connected');
})();

((name)=>{
    console.log(`db connected to ${name}`);
})('mongodb')