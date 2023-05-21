let active = document.querySelector(".activeOption"),
  options = document.querySelectorAll(".none"),
  select = document.querySelector("select");

active.addEventListener("click", () => {
  options.forEach((e) => {
    e.classList.toggle("none");
  });
});

options.forEach((el) => {
  el.addEventListener("click", () => {
    active.innerHTML = el.innerHTML;
    options.forEach((element) => {
      element.classList.toggle("none");
    });
  });
});

let wrapper = document.querySelector(".carousel-inner"),
  images = wrapper.getElementsByTagName("img");

select.addEventListener("change", () => {
  let selectValue = select.value;

  if (selectValue == "destination") {
    location.reload();
  }

  images[0].src = "gambar/" + selectValue + "(1).jpg";
  images[1].src = "gambar/" + selectValue + "(2).jpg";
  images[2].src = "gambar/" + selectValue + "(3).jpg";
});
