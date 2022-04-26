//defind ui


let submit = document.querySelector('#submit');
let searchBox = document.querySelector('#search_box');
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
        }
    }
});

clearTask.addEventListener('click',(e)=>{
    // taskList.innerHTML = '';
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
});
//remove all task





