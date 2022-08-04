const input = document.getElementsByClassName("input");
let inputArray = Array.from(input);
const writer = "user";

for (let i = 0; i <= inputArray.length; i++) {
  const writeComment = () => {
    const commentInput = document.getElementsByClassName("input")[i];
    const commentPostBtn = document.getElementsByClassName("button")[i];

    // 댓글 html
    const addNewComment = () => {
      const newCommentLocation =
        document.getElementsByClassName("insert_comment")[i];
      const newComment = document.createElement("li");

      newComment.innerHTML = `
        <div class="user_comment">
          <strong>${writer}</strong>
          <span>${commentInput.value}</span>
        </div>
      `;

      newCommentLocation.appendChild(newComment);
      commentInput.value = "";
    };
    // 댓글 게시
    commentInput.addEventListener("keyup", () => {
      if (window.event.keyCode === 13 && commentInput.value) {
        addNewComment();
      }
    });
    commentPostBtn.addEventListener("click", addNewComment);
  };
  writeComment();
}
