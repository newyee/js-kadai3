'use strict';
window.addEventListener('DOMContentLoaded', () => {
  let id = 0;
  let todos = [];
  document.getElementById('task_add_button').addEventListener('click',function(){
    let taskElem = document.getElementById('task_text');
    let taskText = taskElem.value;
    if(!taskText){
      return
    }
    let todo = {};
    todo = {
      task:taskText,
      status:'作業中'
    }
    todos.push(todo);
    const tbody = document.getElementById('task_list');
    const row = tbody.insertRow(-1);
    let tdId = row.insertCell();
    let tdComment = row.insertCell();
    let tdStateButton = row.insertCell();
    let tdDeleteButton = row.insertCell();
    let stateButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    // stateButton.setAttribute('value', 'working');
    setStateButton(stateButton,todos);
    setDeleteButton(deleteButton);
    // deleteButton.setAttribute('value', '削除');
    // deleteButton.textContent = '削除';
    tdId.textContent = id;
    tdComment.textContent = todos[id].task;
    // stateButton.textContent = todos[id].status;
    tdStateButton.appendChild(stateButton);
    tdDeleteButton.appendChild(deleteButton);
    id += 1;
    taskElem.value = '';
  });

  const setStateButton = (stateButton, todos) => {
    stateButton.setAttribute('value', 'working');
    stateButton.textContent = todos[id].status;
  }
  const setDeleteButton = (deleteButton) => {
    deleteButton.setAttribute('value', '削除');
    deleteButton.textContent = '削除';
  }

});