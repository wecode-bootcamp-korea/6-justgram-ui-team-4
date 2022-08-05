const commentInput = document.getElementsByClassName("comment-write-input");
const commentButton = document.getElementsByClassName("comment-write-button");
const commentList = document.getElementsByClassName("feed-comment-list");

console.log(Array.from(commentButton));
Array.from(commentButton).forEach((button, index) => {
  button.addEventListener("click", () => {
    const content = commentInput[index].value;

    const childElem = document.createElement("div");

    const nameSpan = document.createElement("span");
    nameSpan.className = "comment-name";
    nameSpan.textContent = "GHI";

    childElem.append(nameSpan, content);

    commentList[index].appendChild(childElem);
  });
});
