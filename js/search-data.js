// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const dataCards = document.querySelector(".data-cards");
const dataContainer = document.querySelector(".data-container");
const searchInput = document.querySelector(".searching");
const mainSearchInput = document.querySelector(".init_search");
const loadingSpinner = document.getElementById('loading-spinner');

let dPresets = [];

// Debounce function to limit the rate at which a function can fire
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    loadingSpinner.classList.remove('d-none');
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(async () => func.apply(await context, args), wait);
  };
}

const handleSearchInput = (e) => {
  const value = e.target.value.toLowerCase();
  dPresets.forEach(dPreset => {
    const isVisible = dPreset.dTitle.toLowerCase().includes(value) || dPreset.dDesc.toLowerCase().includes(value);
    dPreset.element.classList.toggle("d-none", !isVisible);
  });
  loadingSpinner.classList.add('d-none');
};

mainSearchInput.addEventListener("input", debounce(handleSearchInput, 1000));
searchInput.addEventListener("input", debounce(handleSearchInput, 1000));

const fetchData = async (jsonData) => {
  try {
    const res = await fetch(jsonData);
    const data = await res.json();
    dPresets = dPresets.concat(data.map(dataPreset => {
      const dataNode = dataCards.content.cloneNode(true).children[0];
      const dataTitle = dataNode.querySelector(".card-title");
      const dataDescription = dataNode.querySelector(".card-text");
      const dataPlay = dataNode.querySelector(".play");
      const dataStop = dataNode.querySelector(".stop");
      const dataID = dataNode.querySelector(".fav");
      dataTitle.textContent = dataPreset.data_name;
      dataDescription.textContent = dataPreset.data_description;
      dataPlay.setAttribute("onclick", dataPreset.data_start);
      dataStop.setAttribute("onclick", dataPreset.data_stop);
      dataID.setAttribute("id", dataPreset.data_id);
      if (favorites.includes(dataID.id)) {
        dataID.classList.add("faved");
      }
      return {dTitle: dataPreset.data_name, dDesc: dataPreset.data_description, element: dataNode};
    }));
    dPresets.forEach(dPreset => dataContainer.append(dPreset.element));
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
     loadingSpinner.classList.add('d-none');
  }
};

const loadAllData = async () => {
  loadingSpinner.classList.remove('d-none');
  for (const jsonData of jsonDataArray) {
    await fetchData(jsonData);
  }
};

loadAllData();

$("#search-form").submit(function(e) {
  e.preventDefault();
});

const eventer = dataContainer;

$("#search-me").click(function() {
  $("#search-me").addClass("on");
  $("#hilter-front").addClass("on");
  $("#hilter-back").addClass("on");
});

$("#hilter-back").click(function() {
  $("#hilter-front").removeClass("on");
  $("#hilter-back").removeClass("on");
  $("#search-me").removeClass("on");
  $("#search-me").val("");
  $("div.text-center#text-center").removeClass("searched");
  $("h2#searched-for").text("");
  $("div#show-results").html("");
});

$("#hilter-front").click(function() {
  $("#hilter-front").removeClass("on");
  $("#hilter-back").removeClass("on");
  $("#search-me").removeClass("on");
  $("#search-me").val("");
  $("div.text-center#text-center").removeClass("searched");
  $("h2#searched-for").text("");
  $("div#show-results").html("");
});