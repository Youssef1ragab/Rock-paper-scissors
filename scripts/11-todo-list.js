const todoList =[{
name: 'make dinner',
dueDate: '2022-12-22'
}];
let todoListHtml='';
renderTodoList();
function renderTodoList()
{
    document.querySelector('.js-todo-list').innerHTML=
    todoListHtml;
}


function addTodo()
{
    todoListHtml='';
const nameElement= document.querySelector('.js-name-input');
const name=nameElement.value;
todoList.push({
    
    
});
console.log(todoList);
nameElement.value='';
for(let i=0;i<todoList.length;i++)
    {
        const todoObject= todoList[i];
        const name=todoObject.name;

        const dateInputElement =document.querySelector
        ('.js-due-date-input');
        const dueDate =dateInputElement.value;


        const dueDate=todoObject.dueDate;
        const html = 
        `<p>${name} ${dueDate}
        <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
        ">Delete</button>
        </p>`;


        todoListHtml+=html;
    }
    renderTodoList();
}