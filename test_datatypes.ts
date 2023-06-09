"use strict";
let test_name: string = `haha`;
let new_name = test_name.toUpperCase();
console.log(new_name);

let age: number = 30;
console.log(age);

let numList: Array<number> = [1, 2, 3, 4, 5, 6].filter((num) => num%2==1);
numList = numList.concat([1, 2, 3]);
console.log(numList);


// Variable function argument and unpacking
function add_many(num1: number, num2: number, ...nums: Array<number>): number {
    return num1 + num2 + nums.reduce((a, b) => a + b, 0);
}

console.log(add_many(1, 2, 3, 4, 5))
console.log(add_many(1, 2, ...[3, 4, 5, 6]))

// Generics
function concatStuff<Type>(items: Array<Type>): Array<Type>{
    return new Array<Type>().concat(items);
}

let concatInt = concatStuff<number>([1, 2, 3]);
let concatStr = concatStuff<string>(['a', 'b', 'c']);
console.log(concatInt);
console.log(concatStr);

let to_sub: string = "hi";
console.log(`${to_sub} meow`);

