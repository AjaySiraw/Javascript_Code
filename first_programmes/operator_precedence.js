/*
//From High to Low Priority
1> ()
2> 	. [] () //left to right
3> 	!, ~, +, -, typeof
4> **
5> *,/,%
6>+ ,-
7> <<, >>, >>>
*/
let s= 8
console.log(8<<1)
console.log(-8>>>1)//doesnt keep the sign
console.log(-8>>1) //work for signed and unsigned and keep the sign

// prefix and postfix
let x = 3;
const y = x++;
// here first x will assgined to y and then get increased => x:4,y:3

console.log(`x:${x}, y:${y}`);

let a = 3;
const b = ++a;
// here first a will increase then get assigned=>a:4,b:4
console.log(`a:${a}, b:${b}`);
