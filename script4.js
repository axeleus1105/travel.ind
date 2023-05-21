let btn = document.querySelector(".pencet"),
  cPassword = document.querySelector(".cPassword"),
  judul = document.getElementsByTagName("h1")[0],
  input = document.querySelectorAll("input"),
  message = document.querySelectorAll(".message"),
  button = document.querySelector("button"),
  title = document.querySelector('title');
var password = document.querySelectorAll('input[type="password"]');

input.forEach((e, i) => {
  e.addEventListener("blur", () => {
    let eValue = e.value;

    if (eValue.length != 0) {
      message[i].style.display = "none";
      e.style.borderBottomColor = "#0CEDB2";
    } else {
      message[i].style.display = "block";
      e.style.borderBottomColor = "red";
    }
  });
});

btn.addEventListener("click", () => {
  cPassword.classList.toggle("sign-up");
  accept.classList.toggle("sign-up");

  if (judul.innerText == "login") {
    judul.innerText = "signup";
    button.firstElementChild.innerText = "signup";
    btn.innerText = "login";
    title.innerText = "Singup";
  } else {
    judul.innerText = "login";
    button.firstElementChild.innerText = "login";
    btn.innerText = "sign-up";
    title.innerText = "Login";
  }

  password.forEach((e) => {
    e.classList.toggle("sign-up");
    if (e.classList == "sign-up") {
      e.setAttribute("required", "");
    } else {
      e.removeAttribute("required");
    }
  });
});
