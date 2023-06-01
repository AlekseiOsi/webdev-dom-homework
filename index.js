"use strict";
const buttonElement = document.getElementById("button-comment");
const commentElement = document.getElementById("new-com");
const nameInputElement = document.getElementById("name-input");
const textInputElement = document.getElementById("text-input");
const deleteButtonElement = document.getElementById("delete-button");
const buttonLikes = document.querySelectorAll(".like-button");
    
for (const buttonLike of buttonLikes) {
    buttonLike.addEventListener('click', () => {
        console.log(1);
    })
};

let currentDate = new Date();
buttonElement.addEventListener('click', () => {
    nameInputElement.classList.remove("error");
    textInputElement.classList.remove("error");
    if (nameInputElement.value === "") {
        nameInputElement.classList.add("error");
        return;
    };
    if (textInputElement.value === "") {
        textInputElement.classList.add("error");
        return;
    };
    function formatDate(date) {

        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        let hh = date.getHours() % 100
        if (hh < 10) hh = '0' + hh;

        let mi = date.getMinutes() % 100
        if (mi < 10) mi = '0' + mi;
        return dd + '.' + mm + '.' + yy + ' ' + hh + ':' + mi;
    };
    let currentDate = new Date();


    const oldCommentHtml = commentElement.innerHTML;
    commentElement.innerHTML = oldCommentHtml + `    <li class="comment">
      <div class="comment-header">
        <div>${nameInputElement.value}</div>
        <div>${formatDate(currentDate)}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
          ${textInputElement.value}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter"></span>
          <button class="like-button"></button>
          <button class="delete-button">Удалить</button>
        </div>
      </div>
    </li>`;

    const buttonLikes = document.querySelectorAll(".like-button");
    for (const buttonLike of buttonLikes) {
        buttonLike.addEventListener('click', () => {
            console.log(1);
        })
    }

});