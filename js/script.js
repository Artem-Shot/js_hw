'use strict';

(function () {
  const form = document.querySelector('[data-form]');
  const todoItemsContainer = document.querySelector('#todo-list');

  const saveData = (data) => {
    const savedData = localStorage.getItem('todoItem');
    if (!savedData) {
      const preparedData = [];
      preparedData.push(data);
      localStorage.setItem('todoItem', JSON.stringify(preparedData));
    } else {
      const preparedData = JSON.parse(savedData);
      preparedData.push(data);
      localStorage.setItem('todoItem', JSON.stringify(preparedData));
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
  const submitHandler = (e) => {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input, textarea');
    const data = Array.from(inputs).reduce((acc, { name, value }) => {
      acc[name] = value;
      return acc;
    }, {});
    const todoItemElement = createTodoItem(data);
    todoItemsContainer.prepend(todoItemElement);
    saveData(data);
  };

  form.addEventListener('submit', submitHandler);
  document.addEventListener('DOMContentLoaded', () => {
    const newSavedData = JSON.parse(localStorage.getItem('todoItem'));
    newSavedData.forEach((item) => {
      const todoItemElement = createTodoItem(item);
      todoItemsContainer.prepend(todoItemElement);
    });
  });
}());
