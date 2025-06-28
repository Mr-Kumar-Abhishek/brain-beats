// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const dataCards = document.querySelector(".data-cards");
const dataContainer = document.querySelector(".data-container");
const searchInput = document.querySelector(".searching");


let dPresets = [];
searchInput.addEventListener("input", (e)=> {
  const value  = e.target.value.toLowerCase(); 
  dPresets.forEach(dPreset => {
     console.log(dPreset);
    const isVisible = dPreset.dTitle.toLowerCase().includes(value) || dPreset.dDesc.toLowerCase().includes(value);
    dPreset.element.classList.toggle("d-none", !isVisible);
  });
});

fetch(jsonData)
.then(res => res.json())
.then(data => {
 dPresets = data.map(dataPreset => {
  const dataNode = dataCards.content.cloneNode(true).children[0];
  const dataTitle = dataNode.querySelector(".card-title");
  const dataDescription = dataNode.querySelector(".card-text");
  const dataPlay = dataNode.querySelector(".play");
  const dataStop = dataNode.querySelector(".stop");
  const dataID = dataNode.querySelector(".fav");
  dataTitle.innerHTML = dataPreset.data_name;
  dataDescription.innerHTML = dataPreset.data_description;
  dataPlay.setAttribute("onclick", dataPreset.data_start);
  dataStop.setAttribute("onclick", dataPreset.data_stop);
  dataID.setAttribute("id", dataPreset.data_id);
  if (favorites.includes(dataID.id)) {
    dataID.classList.add("faved");
  }
  dataContainer.append(dataNode);
  return {dTitle: dataPreset.data_name, dDesc: dataPreset.data_description, element: dataNode};
  });
});

$("#search-form").submit(function(e) {
  e.preventDefault();
});

const eventer = dataContainer;