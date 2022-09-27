const dataUserIndex = document.querySelector(".data-user-index");
const dataSectionContainer = document.querySelector(".sectionContainer");
const searchInput = document.querySelector(".searching");


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
  sectionTitle.textContent = indexSection.section_name;
  sectionDescription.textContent = indexSection.section_description;
  sectionLink.setAttribute("href", indexSection.section_link);
  dataSectionContainer.append(sectionNode);
  return {iTitle: indexSection.section_name, iDesc: indexSection.section_description, element: sectionNode};
  });
});

$("#search-form").submit(function(e) {
  e.preventDefault();
});
