/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(numb1, numb2){
// Step 2: In the function, return the sum of the parameters number1 and number2
return numb1+numb2;
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers (){
    const num1 = parseInt(document.querySelector("#addend1").value);
    const num2 = parseInt(document.getElementById("addend2").value);
    const sum = document.getElementById("sum");

    sum.value = add(num1,num2);
}
// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById("addNumbers").addEventListener("click",addNumbers);
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

var subtract = function(number1, number2){
    let subtracted = number1 - number2;
    return subtracted;
}

function subtractNumbers (){
    const num3 = parseInt(document.querySelector("#minuend").value);
    const num4 = parseInt(document.getElementById("subtrahend").value);
    const subtract = document.getElementById("difference");

    subtract.value = subtract(num3,num4);

}

document.getElementById("subtractNumbers").addEventListener("click",subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiplication = (numb1, numb2) => (numb1 * numb2);

function multiplyNumbers (){
    const num1 = parseInt(document.querySelector("#factor1").value);
    const num2 = parseInt(document.getElementById("factor2").value);
    const multiply = document.getElementById("product");

    multiply.value = multiplication(num1,num2);
}
document.getElementById("multiplyNumbers").addEventListener("click",multiplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(numb1, numb2){
    return numb1/numb2;
}
function divideNumbers (){
    const num1 = parseInt(document.querySelector("#dividend").value);
    const num2 = parseInt(document.getElementById("divisor").value);
    const quotient = document.getElementById("quotient");

    quotient.value = divide(num1,num2);
}
document.getElementById("divideNumbers").addEventListener("click",divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();
// Step 2: Declare a variable to hold the current year
var currentYear;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").innerHTML = currentYear;
/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = numbers;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const odds = numbers.filter(checkOdd);

function checkOdd(number){
    return number % 2
}
document.getElementById("odds").innerHTML = odds;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evens = numbers.filter(checkEven);

function checkEven(number){
    return (number % 2) - 1
}
document.getElementById("evens").innerHTML = evens;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumOfArray = numbers.reduce(checkSum);

function checkSum(total, num){
    return total + num;
}

document.getElementById("sumOfArray").innerHTML = sumOfArray;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multiplied = numbers.map(x => x * 2);
document.getElementById("multiplied").innerHTML = multiplied;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumOfMultiplied = multiplied.reduce(checkSum2);

function checkSum2(total, num){
    return total + num;
}

document.getElementById("sumOfMultiplied").innerHTML = sumOfMultiplied;