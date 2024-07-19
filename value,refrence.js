//Reference vs Value
//Primitive Data Types
//String ,Number,Symbol,Boolean ,Undefined,Null,
//Arrays,Functions,Objects=object
//type of 

//when assigning primitive data type value to a variable any changes are made directly to that value ,without affecting  original value

//when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

const number=1;
const number2=number;
number2=7;
console.log ('the first value is ${number}');
console.log ('the second  value is ${number2}');
