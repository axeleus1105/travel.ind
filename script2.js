let itemImg = document.querySelectorAll(".wrap img"),
  zoom = document.querySelector(".image"),
  zoomItem = document.querySelector(".image img");

itemImg.forEach((item) => {
  item.addEventListener("click", () => {
    zoom.classList.toggle("zoom");

    zoomItem.src = item.src;
  });
});

zoom.addEventListener("click", () => {
  zoom.classList.toggle("zoom");
});
