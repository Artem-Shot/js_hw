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

    form.reset();

    // Очистка форми після сабміту
  };

  return {
    inputHandler,
    submitHandler,
  };
};

export default getFormHandlers;
