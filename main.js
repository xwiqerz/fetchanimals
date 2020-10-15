const animalResult = document.getElementById("animalResult")
const showAnimalBtn = document.getElementById("showAnimal") 

//lägger eventlistener på Visa Djur knappen
showAnimalBtn.addEventListener("click", getCoolImage)

//en funcion som berättar vad som ska hända när man klickar på knappen
function getCoolImage() {
  //ger url variablen ett tomt värde som vi ändrar nere i if satsen
  let url = "";
  let animal = document.getElementById("selAnimal");
  //hämtar värdet som select(dropdownen)
  let animalValue = animal.value;
  if (animalValue === "Cat") {
    //om man väljer katt används denna länken
    url = "https://aws.random.cat/meow"
  } else if (animalValue === "Dog") {
    //om man väljer hund så används denna länken
    url = "https://random.dog/woof.json"
  } else if (animalValue === "Fox") {
    //om man väljer räv så används denna länken
    url = "https://randomfox.ca/floof/"
  }
  fetch(url) 
  //fetchar urlerna från if satsen ovan
  .then(res => res.json())
  //använder data och ska berätta vad den ska göra nedan
  .then(data => {
    let image = "";
    //ger image ett tomt värde som ändras i if satsen
    if (animalValue === "Cat") {
      //här blir det data.file eftersom den API:n accepterar bara file
      image = data.file
    } else if (animalValue === "Dog") {
      //här blir det data.url för denna API:n
      image = data.url
    } else if (animalValue === "Fox") {
      //och här blir det data.image för denna API:n
      image = data.image
    }
    //här lägger vi till en <img> tag och lägger i infon som vi gjorde i ifsatsen precis ovan.
    animalResult.innerHTML = `<img src="${image}"/>`
  })
}

