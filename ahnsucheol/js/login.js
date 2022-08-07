const loginId = document.getElementById("login-id");
const loginPw = document.getElementById("login-pw");
const button = document.getElementsByClassName("login-btn")[0];

document.addEventListener("keydown", function () {
  let idValue = loginId.value;
  let pwValue = loginPw.value;

  if (idValue.length > 0 && pwValue.length > 0) {
    button.disabled = false;
    button.className = "abled login-btn border";
  } else {
    button.disabled = true;
    button.className = "disabled login-btn border";
  }
});

button.addEventListener("click", function () {
  window.open("main.html");
});
