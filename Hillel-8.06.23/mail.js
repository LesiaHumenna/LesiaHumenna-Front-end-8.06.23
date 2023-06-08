//1
let num1 = [];
    for(let i = 10; i <= 20; i++){
        num1.push(i);
    console.log(num1);
    };

//2
let num2 = [];
    for(let i = 10; i <= 20; i++){
let num2 = i * i;
    console.log(num2);
    };

//3
let a = 7;

for(let i = 0; i <=10; i++){
    let num3 = a * i;
    console.log(`${i} * ${a} = ${num3}`);
};

//4
let s = 0;
    for(let i = 1; i <= 15; i++){
        s += i;
    console.log(s) 
};

//5
let sum = 1;
    for(let i = 15; i <= 34; i++){
    sum *= i;
    console.log(sum);
};

//6
let mean = 0;
let count = 500;

for(let i = 1; i <= count; i++){
    mean += i;  
};
let d = mean / count;
    console.log(d);

//7
let summ = 0;

for(let i = 30; i < 80; i++){
    if(i % 2 === 0){
        summ += i;
    }
console.log(summ);
};

//8
let n = 0;
    for(let i = 100; i <= 200; i++){
        n += i;
    console.log(i);
    };

//9
let c = 0;

for(let i = 1; i <= 20; i++){
    if(20 % i === 0 && i % 2 === 0){
        c += i;
    console.log(c);
    }
};

//10
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
    const product = i * j;
    console.log(`${i} * ${j} = ${product}`);
    }
};