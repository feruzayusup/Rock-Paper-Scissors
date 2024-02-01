const todoList = [{
  name: 'make dinner',
  dueDate:'08-02-2023'
}, {
  name: 'wash dishes',
  dueDate:'08-02-2023'
} ];      //this array get the data from addTodo() method
renderTodoList();

function renderTodoList() {
   let todoListHTML = '';

   todoList.forEach(function(todoObject,index) {
      const { name, dueDate } = todoObject;
      const html = `        
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>          
      `;
      todoListHTML += html;          
   });  

   document.querySelector('.js-todo-list')
     .innerHTML = todoListHTML;


document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
}); //instead of onclick we do this

function addTodo() {

 const inputElement =  document.querySelector('.js-name-input');
 const name = inputElement.value;
 
 const dateInputElement = document.querySelector('.js-due-date-input');
 const dueDate = dateInputElement.value;

 console.log(name);
 todoList.push({
   // name: name,
   // dueDate: dueDate;
   name,
   dueDate
})

 inputElement.value='';
 renderTodoList();
}