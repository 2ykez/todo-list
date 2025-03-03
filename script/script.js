'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form'),
        submitBtn = form.querySelector('.submit__btn'),
        inputTask = form.querySelector('.input__text'),
        listOfTasks = document.querySelector('.list__tasks'),
        modalWindow = document.querySelector('.modal'),
        modalContent = modalWindow.querySelector('.modal__content'),
        closeModalIcon = modalWindow.querySelector('.close__modal'),
        closeModalBtn = modalWindow.querySelector('.close__modal-btn');

    if (localStorage.getItem('tasks')) {
        listOfTasks.innerHTML += localStorage.getItem('tasks');
    }

    if (localStorage.getItem('closedWindow')) {
        modalWindow.classList.remove('show');
        modalWindow.classList.add('hide');
    }

    function closeModal(btn) {
        btn.addEventListener('click', () => {
            modalWindow.classList.remove('show');
            modalWindow.classList.add('hide');
        });

        modalWindow.addEventListener('click', (e) => {
            if (e.target != modalContent) {
                modalWindow.classList.remove('show');
                modalWindow.classList.add('hide');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code == 'Escape') {
                modalWindow.classList.remove('show');
                modalWindow.classList.add('hide');
            }
        })

        localStorage.setItem('closedWindow', true);
    }

    closeModal(closeModalIcon);
    closeModal(closeModalBtn);

    function deleteTask() {
        document.querySelectorAll('.remove__btn').forEach(item => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                localStorage.setItem('tasks', listOfTasks.innerHTML);
            });
        });
    }

    deleteTask();

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let newTask = inputTask.value;

        if (newTask.length > 21) {
            newTask = `${newTask.substring(0, 22)}...`;
        }

        if (newTask.length > 2) {
            listOfTasks.innerHTML += `<li>${newTask} <div class="remove__btn"><img src="icon/remove.svg"></div></li>`;
        } else {
            alert('You should write some');
        }

        form.reset();

        localStorage.setItem('tasks', listOfTasks.innerHTML);

        deleteTask();
    });
});