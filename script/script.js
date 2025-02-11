'use strict';

const form = document.querySelector('form'),
    inputText = form.querySelector('.input__text'),
    inputBtn = form.querySelector('.submit__btn'),
    spaceForTasks = document.querySelector('.tasks'),
    listOfTasks = spaceForTasks.querySelector('ol'),
    removeBtn = document.querySelectorAll('.remove__btn');

inputBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let newTask = inputText.value;

    if (newTask.length > 21) {
        newTask = `${newTask.substring(0, 22)}...`;
    }

    if (newTask.length > 2) {
        listOfTasks.innerHTML += `<li>${newTask}<img src="icon/remove.svg" alt="remove btn" class="remove__btn"></li>`;
    } else {
        alert('You must enter more info');
    }

    form.reset();
});
