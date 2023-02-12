const div = document.querySelector("#image");

function output(onePicture)
{
    let image = document.createElement("img");
    image.setAttribute("src", onePicture.url);
    image.setAttribute("alt", "Image has been deleted.");
    
    div.append(image);
}

async function getRandomDog() 
{
    let response = await fetch("https://random.dog/woof.json");
    data = await response.json();
    console.log(data);
    output(data);
}

document.getElementById("numberOfPhotos").addEventListener("click",getRandomDogPhotos);

function getRandomDogPhotos()
{
    document.querySelector("#image").innerHTML = "";

    var numberOfPhotos = parseInt(document.querySelector("#number").value);
    while (numberOfPhotos > 0)
    {
        numberOfPhotos = numberOfPhotos - 1;
        getRandomDog();
    }
}