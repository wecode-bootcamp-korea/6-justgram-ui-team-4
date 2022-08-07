// Enter 또는 게시 버튼 click시 writer id와 context를 받아와서 total-comments에 추가
// comment 형식: ID context
// 댓글을 단 게시물에만 추가

const input = document.getElementsByClassName("comment-input");
const commentBtn = document.getElementsByClassName("comment-btn");
const writer = "userId";

const inputArr = Array.from(input);

for (let i = 0; i < inputArr.length; i++) {
  // button click event
  commentBtn[i].addEventListener("click", () => {
    const inputLocation = document.getElementsByClassName("total-comments")[i];
    let inputValue = inputArr[i].value;
    const newComment = document.createElement("li");
    newComment.innerHTML = `<strong class='commenter-id'>${writer}</strong><p class='commenter-content'>${inputValue}</p>`;

    inputLocation.appendChild(newComment);

    input.textContent = "";
  });

  input[i].addEventListener("keydown", (e) => {
    // press Enter event
    // Enter key is "13"
    if (e.keyCode === 13) {
      const inputLocation =
        document.getElementsByClassName("total-comments")[i];
      let inputValue = inputArr[i].value;
      const newComment = document.createElement("li");
      newComment.innerHTML = `<strong class='commenter-id'>${writer}</strong><p class='commenter-content'>${inputValue}</p>`;

      inputLocation.appendChild(newComment);
    }
  });
}
// 댓글로 등록된 input값을 삭제하는 방법이 뭘까요,,
// input.textContent = ""; 이거로 해도 안됩니다,,

//comments.json에서 값 불러오기

let comment_list;

fetch("data/comments.json", {})
  .then((res) => res.json())
  .then((data) => {
    comment_list = data;
    for (let i = 0; i < comment_list.length; i++) {
      const comments = document.getElementsByClassName("comment-ul")[i];
      let comment_location = comment_list[i];

      comment_location.map((comment) => {
        const liElement = document.createElement("li");
        liElement.innerHTML = `<strong class='commenter-id'>${comment.commenterName}</strong><p class='commenter-content'>${comment.commentContent}</p>`;
        comments.append(liElement);
      });
    }
  });

//feeds.json에서 값 불러오기

let feed_list;

fetch("data/feeds.json", {})
  .then((res) => res.json())
  .then((data) => {
    feed_list = data;
    for (let i = 0; i < feed_list.length; i++) {
      const feeds = document.getElementsByClassName("profile-container")[i];
      let feed_location = feed_list[i];

      feed_location.map((feed) => {
        const divElement = document.createElement("div");
        divElement.className = "profile-wrapper vertical-center";
        divElement.innerHTML = `<img class="profile-img certical-center" alt="프로필이미지" src="${feed.profileImg}" /> <p class="profile-id">${feed.profileId}</p>`;
        const settingElement = document.createElement("div");
        settingElement.className = "vertical-center";
        settingElement.style.fontSize = "20px";
        settingElement.textContent = "...";
        feeds.append(divElement, settingElement);
      });
    }
  });
