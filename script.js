//defind ui


let submit = document.querySelector('#submit');
let filter = document.querySelector('#search_box');
let taskList = document.querySelector('#task_list');
let inputTask = document.querySelector('#new_task');
let clearTask = document.querySelector('#clear_task_btn');

//Define Even listener
submit.addEventListener('click', (e)=>{
    if(inputTask.value === '') alert('Add a task!');
    else{
        //create li
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(inputTask.value + " "));

        // Importing remove icon from material 
        var icon = document.createElement('i');
        icon.className ='material-icons';
        icon.appendChild(document.createTextNode('disabled_by_default'));
        icon.style.cursor = 'pointer';

        // var removeBtn = document.createElement('a');
        // removeBtn.setAttribute('href','#');
        // removeBtn.id = 'removeBtn';

        li.append(icon);
        
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        taskList.appendChild(li);

        //storing task in local storage
        storeTaskInLocalStorage(inputTask.value);
        inputTask.value = '';
    }
    e.preventDefault();
});

//remove task
taskList.addEventListener('click', (e)=>{
    if(e.target.hasAttribute("class")){
        if(confirm("Are you sure?")){
            let ele = e.target.parentElement;
            ele.remove();
            removeFromLS(ele);
        }
    }
});

//remove all task
clearTask.addEventListener('click',(e)=>{
    // taskList.innerHTML = '';
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
});

//filter task even listener

filter.addEventListener('keyup', (e)=>{
    let text = e.target.value.toLowerCase();
    // console.log(text);

    document.querySelectorAll('li').forEach(task=>{
        let item = task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(text)!=-1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    })

});

//store in local storage
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Reloading data from local storage

document.addEventListener('DOMContentLoaded', ()=>{
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task=>{
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(task + " "));

        // Importing remove icon from material 
        var icon = document.createElement('i');
        icon.className ='material-icons';
        icon.appendChild(document.createTextNode('disabled_by_default'));
        icon.style.cursor = 'pointer';

        // var removeBtn = document.createElement('a');
        // removeBtn.setAttribute('href','#');
        // removeBtn.id = 'removeBtn';

        li.append(icon);
        
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        taskList.appendChild(li);
    })
});

function removeFromLS(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = taskItem;
    li.removeChild(li.lastChild);

    tasks.forEach((task, index)=>{
        if(li.textContent.trim()===task){
            task.splice(index,1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    

}








