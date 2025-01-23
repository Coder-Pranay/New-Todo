let todoList =[
    {
        item:'buy milk', 
        duedate:'4/10/2024'
    },
    {
        item:'Go to collage', 
        duedate:'2//4/2024'
    }
    ];
      
   display();


function addTodo(){
    let todo = document.querySelector('#Todo');
    let tododate = document.querySelector('#todoDate');
    let GetTodo =todo.value;
    let GetDate =tododate.value;
    todoList.push({item:GetTodo, duedate:GetDate}); 
    todo.value =' ';
    tododate.value=' ';
    container();
}

function container(){
    let paragraph = document.querySelector('.todo-container');
    let newHtml = '';
   for(let i=0; i<todoList.length; i++){
    // let item =todoList[i].item;
    // let dueDate = todoList[i].duedate;
    let {item,duedate}=todoList[i];
    newHtml +=`
     <span>${item}</span>
     <span>${duedate}</span>
     <button class="btn-delete" onclick="todoList.splice(${i},1);
      container();">Delete</button>
    `;
   }
  paragraph.innerHTML = newHtml;
}
