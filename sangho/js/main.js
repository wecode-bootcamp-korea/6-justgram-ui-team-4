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
  inputComment[i].addEventListener("keyup", activeBtn);
}

function addComment(i) {
  const userName = "sh.inv";
  const tagArea = document.getElementsByClassName("comment")[i];
  const newDiv = document.createElement("div");

  newDiv.classList.add("add-comment");

  newDiv.innerHTML = `
    <span>
      <a href="">${userName}</a>
      <span>${inputComment.value}</span>
    </span>
    <button><img src="img/main_img/img/heart.png"></button>
  `;

  tagArea.appendChild(newDiv);

  inputComment[index].value = "";

  // for (let i = 0; i > inputComment.length; i++) {
  //   const userName = 'sh.inv'
  //   const tagArea = document.getElementsByClassName('comment')[i];
  //   const newDiv = document.createElement('div').setAttribute('class', 'add-comment');

  //   newDiv.innerHTML = `
  //     <span>
  //     <a href="">${userName}</a>
  //       <span>${inputComment.value}</span>
  //     </span>
  //     <button><img src="img/main_img/img/heart.png"></button>
  //   `;
  // }
}

for (let i = 0; i < commentBtn.length; i++) {
  commentBtn[i].addEventListener("click", () => {
    const userName = "sh.inv";
    const tagArea = document.getElementsByClassName("comment")[0];
    const newDiv = document.createElement("div");

    newDiv.classList.add("add-comment");

    newDiv.innerHTML = `
      <span>
        <a href="">${userName}</a>
        <span>${inputComment[0].value}</span>
      </span>
      <button><img src="img/main_img/img/heart.png"></button>
    `;

    tagArea.appendChild(newDiv);

    inputComment[0].value = "";

    activeBtn();
  });
}
