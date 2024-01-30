const ft_list = $('#ft_list');

function createNew() {
  const newTodo = prompt('Create a new TO DO:');

  if (newTodo !== null && newTodo !== "") {
    const listItem = $('<div></div>').text(newTodo);

    listItem.on('click', function () {
      const remove = confirm(`Remove the TO DO: ${$(this).text()}`);
      if (remove) {
        $(this).remove();
        updateCookies();
      }
    });

    ft_list.prepend(listItem);
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
  const todoItems = ft_list.children().map(function () {
    return $(this).text();
  }).get();
  setCookie('todos', JSON.stringify(todoItems));
}

function loadCookies() {
  const savedTodos = getCookie('todos');
  if (savedTodos) {
    const todoItems = JSON.parse(savedTodos);
    todoItems.forEach(function (todo) {
      const listItem = $('<div></div>').text(todo);

      listItem.on('click', function () {
        const remove = confirm(`Remove the TO DO: ${$(this).text()}`);
        if (remove) {
          $(this).remove();
          updateCookies();
        }
      });

      ft_list.append(listItem);
    });
  }
}

$(document).ready(function () {
  loadCookies();
});