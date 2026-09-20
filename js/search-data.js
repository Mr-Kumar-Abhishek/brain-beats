// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const dataCards = document.querySelector(".data-cards");
const dataContainer = document.querySelector(".data-container");
const searchInput = document.querySelector(".searching");
const mainSearchInput = document.querySelector(".init_search");
const loadingSpinner = document.getElementById('loading-spinner');

const setSafeHTML = (element, html) => {
  element.innerHTML = '';
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  Array.from(doc.body.childNodes).forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      element.appendChild(document.createTextNode(node.textContent));
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'A') {
      const a = document.createElement('a');
      const href = node.getAttribute('href');
      if (href && !/^\s*javascript:/i.test(href)) {
        a.href = href;
      }
      const title = node.getAttribute('title');
      if (title) {
        a.title = title;
      }
      a.textContent = node.textContent;
      element.appendChild(a);
    }
  });
};

let dPresets = [];

// Debounce function to limit the rate at which a function can fire
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const val = (this && this.value ? this.value : '').trim();
    if (val.length > 0 && loadingSpinner) {
      loadingSpinner.classList.remove('d-none');
    }
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      await func.apply(context, args);
    }, wait);
  };
}

const handleSearchInput = (e) => {
  const value = (e.target.value || '').trim().toLowerCase();
  if (value.length === 0) {
    // By default, all presets are hidden when search input is empty
    dPresets.forEach(dPreset => {
      dPreset.element.classList.add("d-none");
    });
  } else {
    // Only show presets that match the search query
    dPresets.forEach(dPreset => {
      const isVisible = (dPreset.dTitle && dPreset.dTitle.toLowerCase().includes(value)) ||
                        (dPreset.dDesc && dPreset.dDesc.toLowerCase().includes(value));
      dPreset.element.classList.toggle("d-none", !isVisible);
    });
  }
  if (loadingSpinner) {
    loadingSpinner.classList.add('d-none');
  }
};

if (mainSearchInput) {
  mainSearchInput.addEventListener("input", debounce(handleSearchInput, 300));
}
if (searchInput) {
  searchInput.addEventListener("input", debounce(handleSearchInput, 300));
}

const fetchData = async (jsonData) => {
  try {
    const res = await fetch(jsonData);
    const data = await res.json();
    const newPresets = data.map(dataPreset => {
      const dataNode = dataCards.content.cloneNode(true).children[0];
      const dataTitle = dataNode.querySelector(".card-title");
      const dataDescription = dataNode.querySelector(".card-text");
      const dataPlay = dataNode.querySelector(".play");
      const dataStop = dataNode.querySelector(".stop");
      const dataID = dataNode.querySelector(".fav");
      setSafeHTML(dataTitle, dataPreset.data_name);
      setSafeHTML(dataDescription, dataPreset.data_description);
      dataPlay.setAttribute("onclick", dataPreset.data_start);
      dataStop.setAttribute("onclick", dataPreset.data_stop);
      dataID.setAttribute("id", dataPreset.data_id);
      if (favorites.includes(dataID.id)) {
        dataID.classList.add("faved");
      }
      // Preset cards are hidden by default
      dataNode.classList.add("d-none");
      dataContainer.append(dataNode);
      return {dTitle: dataPreset.data_name, dDesc: dataPreset.data_description, element: dataNode};
    });
    dPresets = dPresets.concat(newPresets);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    if (loadingSpinner) {
      loadingSpinner.classList.add('d-none');
    }
  }
};

const loadAllData = async () => {
  if (loadingSpinner) {
    loadingSpinner.classList.remove('d-none');
  }
  for (const jsonData of jsonDataArray) {
    await fetchData(jsonData);
  }
  // If search query was entered before all data loaded, apply filter
  const currentQuery = (mainSearchInput?.value || searchInput?.value || '').trim().toLowerCase();
  if (currentQuery.length > 0) {
    dPresets.forEach(dPreset => {
      const isVisible = (dPreset.dTitle && dPreset.dTitle.toLowerCase().includes(currentQuery)) ||
                        (dPreset.dDesc && dPreset.dDesc.toLowerCase().includes(currentQuery));
      dPreset.element.classList.toggle("d-none", !isVisible);
    });
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

$("#hilter-back, #hilter-front").click(function() {
  $("#hilter-front").removeClass("on");
  $("#hilter-back").removeClass("on");
  $("#search-me").removeClass("on");
  $("#search-me").val("");
  if (searchInput) {
    searchInput.value = "";
  }
  $("div.text-center#text-center").removeClass("searched");
  $("h2#searched-for").text("");
  $("div#show-results").html("");
  dPresets.forEach(dPreset => dPreset.element.classList.add("d-none"));
  if (loadingSpinner) {
    loadingSpinner.classList.add('d-none');
  }
});