//Exercise 1//

let taskForm = document.getElementById('task-form');
let taskInput = document.getElementById('task-input');
let taskList = document.getElementById('task-list');

taskForm.addEventListener('submit',(event)=> {
    event.preventDefault();
    if(!taskInput.value){
        alert('You need to write something on the input field.');
    }
    else{
        let newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
})

taskList.addEventListener('click', (event)=>{
    let selectedTask = event.target;
    selectedTask.classList.toggle('completed');
})

//Exercise 2 //

let galleryContainer = document.getElementById('cards-container');

for(let i=0; i < 3; i++){
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card');
    let titleContainer = document.createElement('h2');
    let textContainer = document.createElement('p');
    titleContainer.textContent = 'Title ' + (i+1);
    textContainer.textContent = 'Description of the project ' + (i+1);
    cardContainer.append(titleContainer);
    cardContainer.append(textContainer);
    galleryContainer.append(cardContainer);
}


