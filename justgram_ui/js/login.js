//3가지 요소가 필요함       elements:배열안으로 들어감
const idForm = document.getElementById('idForm');  //id요소
const pwForm = document.getElementById('pwForm');  //pw요소
const btnEvent = document.getElementById('btn');   //btn요소

function onInput(){
  // 브라우저 콘솔창에 event.target : 해당이벤트를 실행한 요소가 보임
  const id = idForm.value;
  const pw = pwForm.value;

  if(id.length >= 1 && pw.length >= 1) {
    // 활성화
    console.log('활성화')
    btnEvent.style.backgroundColor = "#1e90ff";
    btnEvent.style.cursor = "pointer";
    btnEvent.disabled = false;
  }else{
    // 비활성화
    console.log('비활성화');
    btnEvent.style.backgroundColor = "#abd5ff";
    btnEvent.style.cursor = "not-allowed";
    btnEvent.disabled = true;
  }
}

idForm.addEventListener('input',onInput);
pwForm.addEventListener('input',onInput);
btnEvent.addEventListener('button', (event) => {
  event.preventDefault();
});

onInput()