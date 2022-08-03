const inputId = document.getElementsByClassName('identify')[0];
const inputPw = document.getElementsByClassName('password')[0];
const inputBtn = document.getElementsByClassName('login-btn')[0];
// id, pw, btn input을 변수에 할당. class값을 가져올 때는 꼭 인덱스 값 붙여야됨

function activeLoginBtn() {
  if (inputId.value !== '' && inputPw.value !== '') { // id,pw input이 비어있지 않을 때
    inputBtn.style.backgroundColor = '#0095f6'; //버튼 색 변경
    inputBtn.disabled = false; // 버튼 활성화
    inputBtn.style.cursor = 'pointer';
  } else { // 빈칸이라면 다시 btn 비활성화
    inputBtn.style.backgroundColor = '#C0DFFD';
    inputBtn.disabled = true;
    inputBtn.style.cursor = 'default';
  }
}

inputId.addEventListener('keyup', activeLoginBtn);
inputPw.addEventListener('keyup', activeLoginBtn);