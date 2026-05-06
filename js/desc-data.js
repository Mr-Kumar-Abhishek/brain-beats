// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const dataUserIndex = document.querySelector(".data-user-index");
const dataSectionContainer = document.querySelector(".sectionContainer");
const searchInput = document.querySelector(".searching");

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
      if (href && !href.toLowerCase().startsWith('javascript:')) {
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
let iSections = [];
searchInput.addEventListener("input", (e)=> {
  const value  = e.target.value.toLowerCase(); 
  iSections.forEach(iSection => {
     console.log(iSection);
    const isVisible = iSection.iTitle.toLowerCase().includes(value) || iSection.iDesc.toLowerCase().includes(value);
    iSection.element.classList.toggle("d-none", !isVisible)
  });
});

fetch(jsonData)
.then(res => res.json())
.then(data => {
 iSections = data.map(indexSection => {
  const sectionNode = dataUserIndex.content.cloneNode(true).children[0];
  const sectionTitle = sectionNode.querySelector(".card-title");
  const sectionDescription = sectionNode.querySelector(".card-text");
  const sectionLink = sectionNode.querySelector(".linker");
  const sectionID = sectionNode.querySelector(".fav");
  setSafeHTML(sectionTitle, indexSection.section_name);
  setSafeHTML(sectionDescription, indexSection.section_description);
  sectionLink.setAttribute("href", indexSection.section_link);
  sectionID.setAttribute("id", indexSection.data_id);
  console.log(favorites);
  // add class 'faved' to each favorite
  if (favorites.includes(sectionID.id)) {
    sectionID.classList.add("faved");
  }
  dataSectionContainer.append(sectionNode);
  return {iTitle: indexSection.section_name, iDesc: indexSection.section_description, element: sectionNode};
  });
});

$("#search-form").submit(function(e) {
  e.preventDefault();
});

const eventer = dataSectionContainer;