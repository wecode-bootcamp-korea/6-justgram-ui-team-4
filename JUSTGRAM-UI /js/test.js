const test = document.getElementById("test");
const button = document.getElementById("button");

button.addEventListener("click", btnActive);
function btnActive() {
  test.style.color = "red";
}
