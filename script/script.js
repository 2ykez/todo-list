'use strict';

const form = document.querySelector('form'),
    inputText = form.querySelector('.input__text'),
    inputBtn = form.querySelector('.submit__btn'),
    spaceForTasks = document.querySelector('.tasks'),
    listOfTask = spaceForTasks.querySelector('ol');

inputBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let newTask = inputText.value;

    if (newTask.length > 21) {
        newTask = `${newTask.substring(0, 22)}...`;
    }

    if (newTask.length <= 1) {
        alert('You must enter a task longer then one symbol');
    }

    listOfTask.innerHTML += `<li>${newTask}<img src="icon/remove.svg" alt="" class="remove__btn"></li>`;

    form.reset();
})