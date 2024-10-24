'use strict';

import key from './constans.js';
import getFormHandlers from './formHandlers.js';

(function () {
  const form = document.querySelector('[data-form]');
  const todoItemsContainer = document.querySelector('#todo-list');

  const saveData = (data) => {
    const savedData = localStorage.getItem(key);
    if (!savedData) {
      const preparedData = [];
      preparedData.push(data);
      localStorage.setItem(key, JSON.stringify(preparedData));
    } else {
      const preparedData = JSON.parse(savedData);
      preparedData.push(data);
      localStorage.setItem(key, JSON.stringify(preparedData));
    }
  };
  const createTodoItem = ({ title, description }) => {
    const item = document.createElement('div');
    item.className = 'col-4';
    item.innerHTML = `   
       <div className="taskItem">
        <div className="taskHeading" /> ${title}</div>
        <div className="taskDescription" /> ${description}</div>
       </div>`;
    return item;
  };
  const getFormHandlers = (form) => {
    let isFormSubmitDisabled = true;
    const fields = {};

    const init = () => {
      form.querySelectorAll('input, textarea').forEach(({ name }) => {
        fields[name] = false;
      });
    };
    init();

    const inputHandler = ({ target }) => {
      const formSubmitBtn = form.querySelector('button[type=submit]');
      if (target.value.trim().length) {
        fields[target.name] = true;
      } else {
        fields[target.name] = false;
      }

      isFormSubmitDisabled = !Object.values(fields).every((field) => field);

      if (!isFormSubmitDisabled) {
        formSubmitBtn.removeAttribute('disabled');
      } else {
        formSubmitBtn.setAttribute('disabled', '');
      }
    };

    const submitHandler = (e) => {
      e.preventDefault();
      if (isFormSubmitDisabled) return;

      const inputs = e.target.querySelectorAll('input, textarea');
      const data = Array.from(inputs).reduce((acc, { name, value }) => {
        acc[name] = value;
        return acc;
      }, {});

      const todoItemElement = createTodoItem(data);
      todoItemsContainer.prepend(todoItemElement);
      saveData(data);

      // Очистка форми після сабміту
      form.reset();
    };

    return {
      inputHandler,
      submitHandler,
    };
  };

  const { submitHandler, inputHandler } = getFormHandlers(form);

  form.addEventListener('submit', submitHandler);
  form.addEventListener('input', inputHandler); // Додаємо обробник для події "input"

  document.addEventListener('DOMContentLoaded', () => {
    const newSavedData = JSON.parse(localStorage.getItem(key));
    if (newSavedData) {
      newSavedData.forEach((item) => {
        const todoItemElement = createTodoItem(item);
        todoItemsContainer.prepend(todoItemElement);
      });
    }
  });
}());
