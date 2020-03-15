const $list = $('.list');
const $input = $('#add-input');
const $add = $('#add-submit');
const localData = JSON.parse(localStorage.getItem('todos'));
const todos = localData
  ? localData
  : [
      {
        text: 'Buy milk',
        done: false
      },
      {
        text: 'Play with dog',
        done: true
      }
    ];

function saveLocal() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

$(document).ready(function() {
  $('.list').empty();
  todos.forEach(element => {
    $('.list').append(`<li class="item">
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
      saveLocal();
    }
  });
});

$(document).on('click', '.item-remove', function(event) {
  const index = $(this)
    .parent()
    .index();
  todos.splice(index, 1);
  saveLocal();
  $(this)
    .parent()
    .remove();
});

$(document).on('click', '.item-text', function(event) {
  const index = $(this)
    .parent()
    .index();
  todos[index].done = !todos[index].done;
  saveLocal();
  $(this).toggleClass('done');
});
