for (let i = 1; i < 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j < 10; j++) {
        // console.log(`Inner loop value is ${j} and innerloop ${i}`);
        // console.log(i + '*' + j + '=' +i*j);
    }
}

let myarr=['flash','superman','batman'];
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
    
}

for (let i = 0; i <=20; i++) {
    if (i==5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of i is ${i}`);

}
for (let i = 0; i <=20; i++) {
    if (i==5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`);

}