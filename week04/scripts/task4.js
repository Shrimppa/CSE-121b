/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const aboutMe = {
    // Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: "Trenton Ringger",
    // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: "images/My_Pic.jpg",
    // Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: ["Icecream", "Popcorn", "Steak"],
    // Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: ["Playing videogames","Cooking, and baking","Watching anime", "Programming", "Playing with my cats"],
    // Step 6: Add another property named placesLived with a value of an empty array
    placesLived: [
        // Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
        {
            // Step 8: For each property, add appropriate values as strings
            place:"Arizona",
            length:"Twenty-one Years"
        },
        {
            // Step 9: Add additional objects with the same properties for each place you've lived
            place:"Idaho",
            length:"Two Years",
        }
    ]
};

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent=aboutMe.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("src", aboutMe.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("alt", aboutMe.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteList = document.getElementById("favorite-foods");

aboutMe.favoriteFoods.forEach(element => {
    let listItem = document.createElement("li");
    listItem.textContent = element;
    // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    favoriteList.append(listItem);
});

// both of these work I just like the one above better

// for (let i = 0; i < aboutMe.favoriteFoods.length; i++)
// {
//     let listItem = document.createElement("li");
//     listItem.textContent = aboutMe.favoriteFoods[i];
//     favoriteList.append(listItem);
// }

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbiesList = document.getElementById("hobbies");

aboutMe.hobbies.forEach(element => {
    let listItem = document.createElement("li");
    listItem.textContent = element;
    // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    hobbiesList.append(listItem);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let placesLivedContent = document.getElementById("places-lived");

aboutMe.placesLived.forEach(element => {

    let places = document.createElement("dt");
    places.textContent = element.place;

    let lengths = document.createElement("dd");
    lengths.textContent = element.length;

    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    placesLivedContent.append(places);
    placesLivedContent.append(lengths);

});
