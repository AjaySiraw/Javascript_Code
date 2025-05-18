// all primitive type data get stored in stack
//all non primitive type data get stored in heap

//** In heap we got refrence and when we make change then it got reflected in actual heap
// ** in stack we got copy and changes only took place in copy

// heap example
let user1={
    email: "ajay@google.com",
    upi:"phonepay@ybl"
} // its an object and stored in heap

let user2=user1
user2.email="aju@google.com"

console.log(user1)
console.log(user2)
//{ email: 'aju@google.com', upi: 'phonepay@ybl' }
//{ email: 'aju@google.com', upi: 'phonepay@ybl' }
// here changes reflected in both because both point to same heap memory 