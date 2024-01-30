const ft_list = document.getElementById('ft_list');

function createNew() {
  const newTodo = prompt('Create a new TO DO:');

  if (newTodo !== null && newTodo !== "") {
    const listItem = document.createElement('div');
    listItem.textContent = newTodo;

    listItem.addEventListener('click', () => {
      const remove = confirm(`Remove the TO DO: ${listItem.textContent}`);
      if (remove) {
        ft_list.removeChild(listItem);
        updateCookies(); 
      }
    });

    ft_list.insertBefore(listItem, ft_list.firstChild);
    updateCookies(); 
  }
}

function setCookie(key, value) {
  document.cookie = `${key}=${value}`;
}

function getCookie(key) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.split('=');
    if (cookieKey.trim() === key) {
      return cookieValue;
    }
  }
  return null;
}

function updateCookies() {
  const todoItems = Array.from(ft_list.children).map(item => item.textContent);
  setCookie('todos', JSON.stringify(todoItems));
}

function loadCookies() {
  const savedTodos = getCookie('todos');
  if (savedTodos) {
    const todoItems = JSON.parse(savedTodos);
    todoItems.forEach(todo => {
      const listItem = document.createElement('div');
      listItem.textContent = todo;

      listItem.addEventListener('click', () => {
        const remove = confirm(`Remove the TO DO: ${listItem.textContent}`);
        if (remove) {
          ft_list.removeChild(listItem);
          updateCookies(); 
        }
      });

      ft_list.appendChild(listItem);
    });
  }
}

loadCookies();