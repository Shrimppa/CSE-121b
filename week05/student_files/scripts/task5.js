/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const dateTime = new Date();
// Step 2: Declare another variable to hold the day of the week
let dayOfWeek;
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfWeek = dateTime.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
let myMessage;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5)
{
    myMessage = "Hang in there!";    
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else
{
    myMessage = "Woooo! It is the weekend!";
}
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message;
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek)
{
    case 0:
        message = "Sunday";
        break
    case 1:
        message = "Monday";
        break
    case 2:
        message = "Tuesday";
        break
    case 3:
        message = "Wednesday";
        break
    case 4:
        message = "Thursday";
        break
    case 5:
        message = "Friday";
        break
    case 6:
        message = "Saturday";
        break
    default:
        message = "Huh this isn't a day is it?";
        break
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector("#message1").textContent = myMessage;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector("#message2").textContent = message;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
const div = document.querySelector("#temples");

function output(temples) 
{
    const ol = document.createElement("ol");
    temples.forEach((temple) => 
    {
        // const li = document.createElement("li");
        // li.innerHTML = temple.templeName;
        // ol.append(li);

        let article = document.createElement("article");

        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;

        let location = document.createElement("h4");
        location.textContent = temple.location;

        let dedicated = document.createElement("h4");
        dedicated.textContent = temple.dedicated;

        let image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", templeName);

        article.appendChild(templeName);
        article.appendChild(location);
        article.appendChild(dedicated);
        article.appendChild(image);

        document.querySelector("#temples").appendChild(article);
    });
    div.append(ol);
}

async function getTemples() 
{
    let response = await fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json");
    data = await response.json();
    console.log(data);
    output(data);
}

getTemples();

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
// Step 3: Create another function called getTemples. Make it an async function.

// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
const reset = () => 
{
    document.querySelector("#temples").innerHTML = "";
}

// // Step 8: Declare a function named sortBy that does the following:
// // - Calls the reset function
// // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// // - Calls the output function passing in the sorted list of temples

const sortBy = () =>
{
    reset();

    let myFilter = document.getElementById("sortBy").value;

    switch (myFilter) {
        case "templeNameAscending":
            output(
                data.sort((e, e2) => {
                    let element1 = e.templeName;
                    let element2 = e2.templeName;
                    if (element1 < element2) return -1;
                    else if (element1 > element2) return 1;
                    else return 0;
                })
            );
            break;
        case "templeNameDescending":
            output(
                data.sort((e, e2) => {
                    let element1 = e.templeName;
                    let element2 = e2.templeName;
                    if (element1 > element2) return -1;
                    else if (element1 < element2) return 1;
                    else return 0;
                })
            );
            break;
    }
};

// // Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

document.querySelector("#sortBy").addEventListener("change", sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
