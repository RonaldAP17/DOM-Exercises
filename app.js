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

let cardsContainer = document.getElementById('cards-container');

for(let i=0; i < 3; i++){
    let card = document.createElement('div');
    card.classList.add('card');
    let titleContainer = document.createElement('h2');
    let textContainer = document.createElement('p');
    titleContainer.textContent = 'Title ' + (i+1);
    textContainer.textContent = 'Description of the project ' + (i+1);
    card.append(titleContainer);
    card.append(textContainer);
    cardsContainer.append(card);
}


//Exercise 3//

let galleryContainer = document.getElementById("gallery-container");
let imageForm = document.getElementById("add-image-form");
let addImageButton = document.querySelector(".add-image");

imageForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    image = document.createElement("img");
    image.classList.add("image-form");
    let imageUrl = document.querySelector(".image-url");
    if(!imageUrl.value){
        alert('You need to put a link on the input field.');
    }
    else{
        image.setAttribute('src', imageUrl.value);
        galleryContainer.append(image);
        console.log('Image created, URL: ' + imageUrl);
        imageUrl.value = '';
    }

    image.addEventListener('click', (event)=>{
        event.target.remove();
    })
})




