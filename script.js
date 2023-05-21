let selects = document.querySelectorAll(".select");

selects.forEach((e) => {
  let active = e.querySelector(".activeOption"),
    options = e.querySelectorAll(".none");

  active.addEventListener("click", () => {
    options.forEach((el) => {
      el.classList.toggle("none");
    });
  });

  options.forEach((elemen) => {
    elemen.addEventListener("click", () => {
      active.innerHTML = elemen.innerHTML;
      options.forEach((el) => {
        el.classList.toggle("none");
      });
    });
  });
});
