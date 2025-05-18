let num=100
console.log(num.toFixed(2))//will give value upto two decimal place
const num1=123.44 
console.log(num1.toPrecision(3))//will round up the value and only 3 digit num will return
console.log(num1.toPrecision(4))//will give 4 digit number
console.log(num1.toPrecision(2))//since we have 3 digit before decimal and round them upto 2 digit no
// then it will change them to exponential
console.log(num1.toExponential())//concert number to exponential and return string

const num2=10000000000
console.log(num2.toLocaleString('en-IN'))//present num in indian standrd like 1,00,000
console.log(Number.MAX_VALUE)//similar MIN_VALUE

//****math library */
let num3=104.5
console.log(Math.ceil(num3))//upper value
console.log(Math.floor(num3))//lower value
console.log(Math.trunc(num3))//remove decimal part
// random()function
console.log(Math.random())//return randomm value between 0 and 1
console.log(Math.random()*10)

//to get between a range
let max=20
let min=10
console.log((Math.random()*(max-min+1))+min)

//Date
let date=new Date()
console.log(date)//return a string 
//there are many methods we can apply on date to make it readable
console.log(date.toJSON())
console.log(date.toISOString())

let mydate=new Date(2025, 0, 23)//in js month start from 0
console.log(mydate)
let date1=new Date("01-25-2025")//here its in mm-dd-yyy format and in such case month start from 01
console.log(date1.toDateString())

//Time stamp
let time=Date.now()
console.log(time) //return milisecond from 1970 to till prresent time
console.log(date1.getTime())

//localemethod
mydate.toLocaleString('default',{
  weekday:"long"
})
console.log(mydate) //use to modify date format according to ourself