//Array declaration

const arr=[0,1,2,3,4] 
const arr1=["aju","tanu","bugu"]
const arr2= new Array(1,3,4,5)
//Properties
/*
1> 0 basd indexing
2>resizable
3> arr.push(6)
4> arr.pop()=>remove last element
5>arr.unshift(9)=>add 9 at starting idx
6> arr.shift()=>remove starting element
7> arr.join()=>join all element of array and convert in string
8> ** arr.splice(1,3)=> include arr[3] and slice the array and also change the original array

*/
const arr3=[...arr,...arr1] //this is a spread operator and will concatnate two array
console.log(arr3)
const arr4=[1,2,3,[4,5,6,[7,8]]]
console.log(arr4.flat(Infinity))//flaten the array upto to infinity depth

// *** in .concat()concat two array or string
// ** .spread()concat array string on any iterable element even we can add more
console.log(Array.isArray("Hitesh"))//check is it array or not
console.log(Array.from("Hitesh"))//convert in array
console.log(Array.from({name:"Hitesh"}))//give empty array 

let a=100
let b=90
let c=80
console.log(Array.of(a,b,c)) //convert set of elememt into array