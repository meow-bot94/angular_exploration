"use strict";
let test_name: string = `haha`;
let new_name = test_name.toUpperCase();
console.log(new_name);

let age: number = 30;
console.log(age);

let numList: Array<number> = [1, 2, 3, 4, 5, 6].filter((num) => num%2==1);
numList = numList.concat([1, 2, 3]);
console.log(numList);

