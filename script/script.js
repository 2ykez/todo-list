'use strict';

const form = document.querySelector('form'),
    inputText = form.querySelector('.input__text'),
    inputBtn = form.querySelector('.submit__btn'),
    spaceForTasks = document.querySelector('.tasks'),
    listOfTask = spaceForTasks.querySelector('ol');

inputBtn.addEventListener('click', (e) => {
    e.preventDefault();

    listOfTask.innerHTML += `<li>${inputText.value} <img src="icon/remove.svg" alt="" class="remove__btn"></li>`;

    form.reset();
})