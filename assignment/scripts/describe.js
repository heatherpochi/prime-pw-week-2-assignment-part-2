// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set it to Dane as a string data.
// We check if the variable equals Mary in terms of both data and data type. If name equals Mary we print Hi, Mary! to the console and if not, print How do you do? to the console. Dane is not the same as Mary although both are string data, so the command would print How do you do? on the console.
//
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable named secret. We create another variable called code and set it as 123 as a number. We check if the variable code equasl 123 in terms of both data and data type. If code equals 123, we assign super, which is a string data, to secret. In addition, we multiply code by 2 and assign the result to code. If code is greater than 250 we assign duper to secret. We print the value of secret to the console, in which case super will show up on the console because number 123 equals number 123.
//
//
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We creat a boolean variable called isStudent and set it as true. We create a number variable called age and set it as 34. We create another number varible called zip and set it as 55407. We check if isStudent equals true in terms of both data and data type and if zip is greater than 80000, in which case we print You're a student on the West Coast! on the console. If isStudent equals false in terms of both data and data type or age is less than 30, we print What are your hobbies? to the console. If isStudent equals true in terms of data and data type, we print Welcome to Prime! to console. If all of the three conditions are not true, print How about the weather? to the console. The variables say that the person is student, 34 years old, and has zipcode 55407, Welcome to Prime! will show up on the console.
//
//
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
//Fix - colorTwo also needs to be set to 'purple' so add colorTwo = 'purple'.
//To check if the boolean variable mix is true, if (mix) {} could be sufficient if I know for certain that mix is a boolean variabel.
//My code would look as below.

if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';
};

or

if (mix) {
  colorOne = 'purple';
  colorTwo = 'purple';
};

*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40
const time = 4;
//Fix - time can change so the variable time needs to be created using let or var. I would write let time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
//To check if both conditions are true we need to use && instead of ||. It should say if(temp > 39 && time >=4)
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
//Fix - If minAge can change we need to use var or let. If minAge is fixed, const is okay. I'll assume that minAge is fixed at 21 in this case.

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}

//Fix - The greater than or equal operator is >= so I would write age >= minAge rather than minAge <= age. In this case, I would have to swich the order of code blocks. So my code would look as below.

 if(age >= minAge){
  console.log('enter');
} else {
  console.log('enter');
};

//Or if the original coder's intention was to reverse the position of age and minAge thus to negate >=, I would write if(minAge > age) and keep the rest of the code as is. So the code would look as below.

if(minAge > age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
