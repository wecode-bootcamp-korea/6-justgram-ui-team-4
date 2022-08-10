const inputComment = document.getElementsByClassName("input-comment"); // 인풋창
const commentBtn = document.getElementsByClassName("input-comment-btn"); // 버튼

function activeBtn() {
  // 댓글 입력시 게시 버튼 활성화
  for (let i = 0; i < inputComment.length; i++) {
    // 게시글이 여려개일때를 가정해서 반복문 실행
    if (inputComment[i].value) {
      // 댓글 인풋 value가 true일 때 버튼 활성화
      commentBtn[i].disabled = false;
      commentBtn[i].style.color = "#0096F6";
      commentBtn[i].style.cursor = "pointer";
    } else {
      // 값이 없다면 버튼 비활성화
      commentBtn[i].disabled = true;
      commentBtn[i].style.color = "#CBE5FD";
      commentBtn[i].style.cursor = "default";
    }
  }
}

// 게시글이 여러개일때를 가정해서 반복문에 들어가있는 이벤트리스너 실행
for (let i = 0; i < inputComment.length; i++) {
  inputComment[i].addEventListener("keyup", activeBtn); // 댓글란에 키보드 입력이 감지되면 activBtn 함수 실행
}


for (let i = 0; i < commentBtn.length; i++) {
  const tagAreaIndex = document.getElementsByClassName("comment")[i];
  const inputCommentIndex = inputComment[i];

  commentBtn[i].addEventListener("click", () => {
    const userName = "sh.inv";
    const newDiv = document.createElement("div");

    newDiv.className = 'add-comment';

    newDiv.innerHTML = `
      <span>
        <a href="">${userName}</a>
        <span>${inputCommentIndex.value}</span>
      </span>
      <button><img src="img/main_img/img/heart.png"></button>
    `;

    tagAreaIndex.appendChild(newDiv);

    inputCommentIndex.value = "";

    activeBtn();
  });
}

// fetch 함수를 통해 json 데이터를 가져와 댓글단 유저와 댓글 값을 가져옴.
fetch('data/comment.json')
.then(res => res.json())
.then(data => {
  data.forEach(object => {
    const newDiv = document.createElement('div');
    const tagAreaIndex = document.getElementsByClassName("comment")[0];
    newDiv.className = 'add-comment';

    newDiv.innerHTML = `
    <span>
    <a href="">${object.user}</a>
    <span>${object.content}</span>
  </span>
  <button><img src="img/main_img/img/heart.png"></button>
    `;

    tagAreaIndex.appendChild(newDiv);
  });
})