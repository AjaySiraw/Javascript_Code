
// string interpolation
let name1="aju"
let age=24
console.log(`my name is ${name1} and i am ${age} years old`)

// string declaration using obje
let name2= new String("ajaysiraw")
// in this way we can use all the methods of string on name2
console.log(name2[0]) // =>a

//String methods
console.log(name2.toUpperCase())
console.log(name2.charAt(2))//give char at index2
console.log(name2.indexOf('s'))//give index of char s
let name4=name2.substring(-9,4)
console.log(name4)//it will ignore -9 and start from 0
let name3=name2.slice(-8,4)//it accept - values and will start from end *** -8 means length-8 i.e.1
console.log(name3)

let cast="  siraw  "
console.log(cast)
console.log(cast.trim())// it will remove all spaces
//trim whitespace + line terminators
//trimStart or trimleft and trimEnd or trimright also work as their names
let line="my_name_is_ajay"
console.log(line.split('_'))//return an array and split the string based on _
console.log(line.split('_',3))//return array with size 3
