// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// add class 'fav' to each favorite
favorites.forEach(function(favorite) {
  $("#" + favorite).addClass("faved");
});
// register click event listener
document.querySelector('.sectionContainer').addEventListener('click', function(e) {
  var item = $(e.target);
  var id = item.attr("id");
  var index = favorites.indexOf(id);
  // return if target doesn't have an id (shouldn't happen)
  if (!id) return;
  // item is not favorite
  if (index == -1) {
    favorites.push(id);
    item.addClass("faved");
  // item is already favorite
  } else {
    favorites.splice(index, 1);
    item.removeClass("faved");
  }
  // store array in local storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
});

// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage