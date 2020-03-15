(function($) {
  $.fn.todoList = function(todos) {
    const localData = JSON.parse(localStorage.getItem('todos'));
    const saveLocal = todos => localStorage.setItem('todos', JSON.stringify(todos));
    if (!todos) {
      todos = localData ? localData : [];
    }
    $(this).append(
      `    <h2>Add Todo</h2>
      <form>
        <label for="add-input">New task:</label>
        <input type="text" class="add-input" />
        <button class="add-submit">Add</button>
      </form>
      <hr>
      <h2>Todo List</h2>
      <ul class="list">
      </ul>`
    );
    const $list = $(this).find('.list');
    const $input = $(this).find('.add-input');
    const $add = $(this).find('.add-submit');
    $list.empty();
    todos.forEach(element => {
      $list.append(`<li class="item">
      <span class="item-text${element.done ? ' done' : ''}">${element.text}</span>
      <button class="item-remove">Remove</button>
      </li>`);
    });
    $add.click(function(event) {
      event.preventDefault();
      if ($input.val().trim().length === 0) {
        alert('New task cannot be empty');
      } else {
        $list.append(`<li class="item">
      <span class="item-text">${$input.val()}</span>
      <button class="item-remove">Remove</button>
      </li>`);
        todos.push({ text: $input.val(), done: false });
        saveLocal(todos);
      }
    });
    $(this).on('click', '.item-remove', function(event) {
      const index = $(this)
        .parent()
        .index();
      todos.splice(index, 1);
      saveLocal(todos);
      $(this)
        .parent()
        .remove();
    });

    $(this).on('click', '.item-text', function(event) {
      const index = $(this)
        .parent()
        .index();
      todos[index].done = !todos[index].done;
      saveLocal(todos);
      $(this).toggleClass('done');
    });

    return this;
  };
})(jQuery);

$('.todo-plugin').todoList();
// $('.todo-plugin').todoList([
//   {
//     text: 'Buy milk',
//     done: false
//   },
//   {
//     text: 'Play with dog',
//     done: true
//   }
// ]);
