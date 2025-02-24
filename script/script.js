'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form'),
        submitBtn = form.querySelector('.submit__btn'),
        inputTask = form.querySelector('.input__text'),
        listOfTasks = document.querySelector('.list__tasks');

    if (localStorage.getItem('tasks')) {
        listOfTasks.innerHTML += localStorage.getItem('tasks');
    }

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let newTask = inputTask.value;

        if (newTask.length > 21) {
            newTask = `${newTask.substring(0, 22)}...`;
        }

        listOfTasks.innerHTML += `<li>${newTask} <div class="remove__btn"><img src="icon/remove.svg"></div></li>`;

        form.reset();

        localStorage.setItem('tasks', listOfTasks.childNodes);

        document.querySelectorAll('.remove__btn').forEach(item => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
            });
        });
    });

    console.log(localStorage.getItem('tasks', listOfTasks.childNodes));
});