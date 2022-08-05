// input comment
const commentInput = document.getElementsByClassName("inputNewComment");
// btn
const commentBtn = document.getElementsByClassName("feedCommentBtn");
// comment list
const commentList = document.getElementsByClassName("feedCommentList");

Array.from(commentBtn).forEach((btn, index) => {

  btn.addEventListener('click', () => {
    const content = commentInput[index].value;

    const childElem = document.createElement('div');

    const nameSpan = document.createElement('span');
    nameSpan.className = 'comment-name';
    nameSpan.textContent = 'miogy';

    childElem.append(nameSpan, content);
    commentList[index].appendChild(childElem);
  });
});

//   //btn eventlistener
//   commentBtn.addEventListener('click', () => {

//   const content = commentInput.value;
//   console.log(content)

//   const childElem = document.createElement('div');

//   const nameSpan = document.createElement('span');
//   nameSpan.className = 'comment-name';
//   nameSpan.textContent = 'miogy';

//   childElem.append(nameSpan, content);
//   commentList.appendChild(childElem);
// });
  

