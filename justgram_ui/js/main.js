//피드 하나일시 getElementsByClassName("inputNewComment")[0] =>배열로 바뀌면서 지움
const commentInput = document.getElementsByClassName("inputNewComment"); // input comment

const commentBtn = document.getElementsByClassName("feedCommentBtn"); // btn

const commentList = document.getElementsByClassName("feedCommentList"); // comment list

//1.fetch로 json 가져오기
fetch("./data/comments.json")  //404 경로 에러시 확인
.then((res) => res.json())
.then((data) => {
  //console.log(data) //1.fetch로 json가져오기 콘솔로 {comments:Array(3)}확인 

  let commentArray = data.comments; 
  //2.데이터를 받아서 배열로 다시 할당하기
  //이유: 배열에 반복문(forEach)을 주기위해 배열안에 객체로 변환
  //console.log(commentArray) //1번 콘솔과 달리 (3) [{..},{..},{..}] 배열형태로 바뀜

  commentArray.forEach((comment)=>{ //배열에 담긴 댓글을 하나하나 반복문 돌기
    
    //commentList에 반복문이 돌면서 피드마다 댓글을 하나씩 넣어줌
    for( i=0; i<commentArray.length; i++){ //comment피드의 갯수만큼 반복문이 돌아야 하므로 length를 넣어줌
      const commentElem = document.createElement('div'); //new comment 'div'
      const nameSpan = document.createElement('span'); //userName span
      nameSpan.className = 'comment-name';
      nameSpan.textContent = comment.userName;

      const content = comment.content;
      commentElem.append(nameSpan,content);
      commentList[i].append(commentElem); //배열 하나하나를 넣어줘야함
    }
  })
});

// 배열로 반복문 forEach
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
  

