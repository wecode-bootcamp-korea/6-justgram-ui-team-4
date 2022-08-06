const commentInput = document.getElementsByClassName("comment-write-input");
const commentButton = document.getElementsByClassName("comment-write-button");
const commentList = document.getElementsByClassName("feed-comment-list");

fetch("./data/comments.json")
  .then((res) => res.json())
  .then((data) => {
    const commentArray = data.comments;
    commentArray.forEach((comment) => {
      for (let i = 0; i < commentArray.length; i++) {
        const commentElem = document.createElement("div");
        const nameSpan = document.createElement("span");
        nameSpan.className = "comment-name";
        nameSpan.textContent = comment.userName;
        const content = comment.content;
        commentElem.append(nameSpan, content);
        commentList[i].append(commentElem);
      }
    });
  });

Array.from(commentButton).forEach((button, index) => {
  button.addEventListener("click", () => {
    const content = commentInput[index].value;

    const childElem = document.createElement("div");

    const nameSpan = document.createElement("span");
    nameSpan.className = "comment-name";
    nameSpan.textContent = "ABC";

    childElem.append(nameSpan, content);

    commentList[index].appendChild(childElem);
  });
});
