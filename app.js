$(document).ready(function(){
 var toDoApp = $('#to-do-app');
 var helloWorld = $('<h1>To Do App</h1>');
 var toDoList = $('<ul></ul>');
 var input = $('<input/>');
 var addItemButton = $('<button>Add to do</button>');
 var toDoClearButton = $('<button>Clear Completed Items</button>')

 toDoApp.append(helloWorld);
 toDoApp.append(input);
 toDoApp.append(addItemButton);
 toDoApp.append(toDoList);
 toDoApp.append(toDoClearButton);

  function handleAddItem() {
    var newTodo = input.val()

    if (newToDo) {
      input.val('')
      var newToDoItem = $('<li></li>');
      newToDoItem.text(newTodo);
      toDoList.append(newToDoItem);
    }
  }

  toDoList.on('click', 'li', function() {
    var toDoItem = $(this);
    toDoItem.toggleClass('done')
  })

  addItemButton.on('click', handleAddItem);

  toDoClearButton.on('click', function() {
    $('li.done').remove();
  })

})
