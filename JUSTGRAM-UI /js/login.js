const loginButton = document.getElementById("login_btn");

/*function btnActive() {
  loginButton.disabled = false;
}

const loginId = document.getElementById("user_id");
loginId.addEventListener("keydown", btnActive);

const loginpw = document.getElementById("user_pw");
loginpw.addEventListener("keydown", btnActive);*/
//해당방법으로 하면 한번 활성화된 버튼이 다시 돌아가지 않음

const loginId = document.getElementById("user_id");
const loginPw = document.getElementById("user_pw");

loginButton.disabled = true;
loginId.addEventListener("keyup", btnActive);
loginPw.addEventListener("keyup", btnActive);
function btnActive() {
  if (loginId.value.length > 0 && loginPw.value.length > 0) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}
