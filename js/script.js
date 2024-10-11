'use strict';

(function () {
  const form = document.querySelector('[data-form]');
  const todoList = document.querySelector('#todo-list');
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
    todoList.prepend(todoItemElement);
  };

  form.addEventListener('submit', submitHandler);
}());
