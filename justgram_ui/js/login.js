const idForm = document.querySelector('#userId');
const pwForm = document.querySelector('#userPw');
const loginBtn = document.querySelector('#loginBtn');

idForm.addEventListener('keyup',activeEvent);
pwForm.addEventListener('keyup',activeEvent);
loginBtn.addEventListener('click',errorEvent);

function activeEvent(){
  switch(!(idForm.value && pwForm.value)){
    case true : loginBtn.disabled = true; break;
    case false : loginBtn.disabled = false; break
  }
}

