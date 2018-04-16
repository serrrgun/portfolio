var popup = document.querySelector(".hotels-search");

popup.classList.add("modal-hide");

var open = document.querySelector(".search-hotels");
  popup.classList.add("modal-hide");
  open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-hide");
});
