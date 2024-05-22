/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Code example
// for(var i=1; i<=5; i++) {
//  console.log(i);
// }







//lesson1
/*
1.JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object
2. to create or declare a variable by putting the keyword var
3.If you do a mathematical operation on an undefined variable, your result will be NaN, which means "Not a Number.
4.If you concatenate a string with an undefined variable, you will get a string of undefined.
*/ 
var myVar;
myVar = 5;

var myVar;
myVar = 5;
var myNum;
myNum = myVar;

var myVar=0;

var myName = "your name";

var camper = "James";
var camper = "David";
console.log(camper);
/*
In the code above, the camper variable is originally declared as James, and is then overridden to be David. The console then displays the string David.
 In a small application, you might not run into this type of problem. But as your codebase becomes larger, you might accidentally overwrite a variable that you did not intend to. Because this behavior does not throw an error, searching for and fixing bugs becomes more difficult

*/
let camper = "James";
let camper = "David";
/*So unlike var, when you use let, a variable with the same name can only be declared once. */

const FAV_PET = "Cats";
FAV_PET = "Dogs";
/* 
ariables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:
*/


//use uppercase variable identifiers for immutable values
//lowercase or camelCase for mutable values (objects and arrays)

//addition
let myVar = 5 + 10;
console.log(myVar);

//compound assignment
let myVar = 1;
myVar +-*/= 5;
console.log(myVar);


//when you need a literal quote: " or ' inside of your string?
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
//output:Alan said, "Peter is learning JavaScript".

//escape sequence in string
/*
\'-single quote
\"-doublee quote
\\-backlash
\\n-new line
\t-tab
\r-carriage return
\b- word boundary
\f-form feed
*/

//Concatenating Strings
const ourStr = "I come first. " + "I come second.";

let ourStr = "I come first. ";
ourStr += "I come second.";
output:I come first. I come second.

//Constructing Strings with Variables
const ourName = "Metacrafters";
const ourStr = "Hello, our name is " + ourName + ", how are you?";

//Appending Variables to Strings
const anAdjective = "awesome!";
let ourStr = "Metacrafters is ";
ourStr += anAdjective;
output:Metacrafters is awesome!

//length of string
console.log("Alan Peter".length);

const firstName = "Ada"
console.log(firstName.length);

/*
String values are immutable,they cannot be altered once created

*/
let myStr = "Bob";
myStr[0] = "J";
ouput:error

let myStr = "Bob";
myStr = "Job";
output:Job

//if and conditional
function equalityTest(myVal) {
    if (myVal == 10) {
      return "Equal";
    }
    return "Not Equal";
  }
/*

In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:
10   ==  10  // true
10   ==  20  // false
10   == '10' // true
"10" ==  10  // true


//Comparison with the Strict Equality Operator
/*
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false
 */

3 ===  3  // true
3 === '3' // false

//the Inequality Operator(!=)
// Strict Inequality Operator(!==)


//else
if (num > 10) {
    return "Bigger than 10";
  } else {
    return "10 or Less";
  }
//else if
if (num > 15) {
    return "Bigger than 15";
  } else if (num < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 15";
  }
//The function is executed from top to bottom
function foo(x) {
    if (x < 1) {
      return "Less than one";
    } else if (x < 2) {
      return "Less than two";
    } else {
      return "Greater than or equal to two";
    }
  }

  
  //switch
  switch (lowercaseLetter) {
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
  }
//case values are tested with strict equality (===).

switch (num) {
    case value1:
      statement1;
      break;
    case value2:
      statement2;
      break;

    default:
      defaultStatement;
      break;
  }

  //ternary operator
  a ? b : c

  function findGreaterOrEqual(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }
//with ternanry operator
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }

  
  //array
  const sandwich = ["peanut butter", "jelly", "bread"];

//Nest one Array within Another Array
const teams = [["Bulls", 23], ["White Sox", 45]];

//access array
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
  
//Modify Array Data With Indexes
const ourArray = [50, 40, 30];
ourArray[0] = 15;
//ourArray now has the value [15, 40, 30].


//Access Multi-Dimensional Arrays With Indexes
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];

  
  /*Manipulate Arrays With push Method
An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array. */

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
//arr1 now has the value [1, 2, 3, 4] and 
//arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]]



/*Manipulate Arrays With pop Method
Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays. */
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
//The first console.log will display the value 6, and the second will display the value [1, 4]



/*Manipulate Arrays With shift Method
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last. */

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
//removedFromOurArray would have a value of the string Stimpson, and
// ourArray would have ["J", ["cat"]].



/*Manipulate Arrays With unshift Method
Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array. */

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
//After the shift, ourArray would have the value ["J", "cat"]. 
//After the unshift, ourArray would have the value ["Happy", "J", "cat"].



//Build JavaScript Objects
/*Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties. */
ex1:
const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
  };
ex2:
const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
  };
/*note:You can even omit the quotes for single-word string properties
if your object has any non-string properties, JavaScript will automatically typecast them as strings.
*/  



//Accessing Object Properties with Dot Notation
/*Dot notation is what you use when you know the name of the property you're trying to access ahead of time. */
const myObj = {
    prop1: "val1",
    prop2: "val2"
  };
  
  const prop1val = myObj.prop1;
  const prop2val = myObj.prop2;


//Accessing Object Properties with Bracket Notation
/*If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
However, you can still use bracket notation on object properties without spaces. */

const myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
  };
  
  myObj["Space Name"];
  myObj['More Space'];
  myObj["NoSpace"];
/*Note:Note that property names with spaces in them must be in quotes (single or double).
 */  



//Updating Object Properties
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
//ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; 


//Add New Properties to a JavaScript Object
/*we would add a bark property to ourDog:
ourDog.bark = "bow-wow"; or ourDog["bark"] = "bow-wow";*/

const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  
  ourDog.bark = "bow-wow";


//Delete Properties from a JavaScript Object
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
  };
  
  delete ourDog.bark;

  
  //functions
  function functionName() {
    console.log("Hello World");
  }

  //Passing Values to Functions with Arguments
  function testFun(param1, param2) {
    console.log(param1, param2);
  }
    
  //Return a Value from a Function with Return
  function plusThree(num) {
    return num + 3;
  }
  
  const answer = plusThree(5);


  
  //Global Scope and Functions
  /*note:Variables that are declared without the let or const keywords are automatically created in the global scope.
   You should always declare your variables with let or const.
  */



//Local Scope and Functions
function myTest() {
    const loc = "foo";
    console.log(loc);
  }
  
  myTest();
  console.log(loc);
//The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.



//while loops
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

//for loop
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}

//Nesting For Loops
const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }

  //Do...While Loops
  const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);



//Use the parseInt Function
/*The parseInt() function parses a string and returns an integer */
const a = parseInt("007");  





