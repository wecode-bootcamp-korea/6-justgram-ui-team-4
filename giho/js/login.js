const idInput = document.getElementById("username");

const passwordInput = document.getElementById("pwd");

const loginButton = document.getElementById("login-btn");

loginButton.disabled = true;

function onInput(event) {
  const id = idInput.value;
  const pw = passwordInput.value;
  const btn = loginButton;

  if (id.length > 1 && pw.length > 1) {
    console.log("버튼 활성화");
    btn.style.backgroundColor = "navy";
    btn.style.cursor = "pointer";
    btn.disabled = false;
  } else {
    console.log("버튼 비활성화");
    btn.style.backgroundColor = "#cde9f4";
    btn.style.cursor = "not-allowed";
    btn.disabled = true;
  }
}

idInput.addEventListener("input", onInput);

passwordInput.addEventListener("input", onInput);

loginButton.addEventListener("click", () => {
  console.log("클릭");
});
