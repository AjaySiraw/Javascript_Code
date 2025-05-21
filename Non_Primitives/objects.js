const obj1= new Object()//here singleton will be created
const obj2={

} //no singelton
console.log(obj1)
// Accessing elements
obj2.emailid="ajay@gmail.com"
obj2.contactno="904839302"
console.log(obj2)
// Accessing element
console.log(obj2.emailid)
console.log(obj2["emailid"])// recommend way

//nested -objects
const obj3={
    email:"some@ggo",
    username:{
        useraddress:{
           home:"padmpu",
           district:{
            number:"3ue89"
           }
        }
    }
}
console.log(obj3.username.useraddress.district.number)
//merging objects
const obj4=Object.assign({},obj2,obj3)
console.log(obj4)
const obj5={...obj2,...obj3}//merging with spread operator
//some functions
console.log(Object.keys(obj2))//gives key
console.log(Object.values(obj2))//gives value
console.log(Object.hasOwnProperty("emailid"))//to check wheter a property exist or not in object
console.log(Object.entries(obj2))//gies all entries

//****Destructureing objects */
//const{Propertyname to extract:aliasing if you want}=object name
const{contactno:co}=obj2
console.log(co)