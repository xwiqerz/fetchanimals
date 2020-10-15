const animalResult = document.getElementById("animalResult")
const showAnimalBtn = document.getElementById("showAnimal") 

//lägger eventlistener på Visa Djur knappen
showAnimalBtn.addEventListener("click", getCoolImage)

//en funcion som berättar vad som ska hända när man klickar på knappen
function getCoolImage() {
  let url = "";
  let animal = document.getElementById("selAnimal");
  //hämtar värdet som select(dropdownen)
  let animalValue = animal.value;
  if (animalValue === "Cat") {
    //om man väljer katt används denna länken detsamma för andra else if satser
    url = "https://aws.random.cat/meow"
    //ger url ett värde
  } else if (animalValue === "Dog") {
    url = "https://random.dog/woof.json"
  } else if (animalValue === "Fox") {
    url = "https://randomfox.ca/floof/"
  }
  fetch(url) 
  //fetchar urlerna från if satsen ovan
  .then(res => res.json())
  .then(data => {
    let image = "";
    if (animalValue === "Cat") {
      //Ger ändrar data.(detta) för att kunna öppna olika API:er
      image = data.file
      //ger image ett värde
    } else if (animalValue === "Dog") {
      image = data.url
    } else if (animalValue === "Fox") {
      image = data.image
    }
    //här lägger vi till en <img> tag och lägger i infon som vi gjorde i ifsatsen precis ovan.
    animalResult.innerHTML = `<img src="${image}"/>`
  })
}

