'use strict';
window.addEventListener('DOMContentLoaded', () => {
  let id = 0;
  const todos = [];
  document.getElementById('task_add_button').addEventListener('click', () => {
    const taskElem = document.getElementById('task_text');
    const taskText = taskElem.value;
    if(!taskText){
      return
    }
    const todo = {
      task: taskText,
      status: '作業中'
    }
    todos.push(todo);
    displayData();
    id += 1;
    taskElem.value = '';

  });
  const displayData = () => {
    const tbody = document.getElementById('task_list');
    const row = tbody.insertRow(-1);
    let tdId = row.insertCell();
    let tdComment = row.insertCell();
    let tdStateButton = row.insertCell();
    let tdDeleteButton = row.insertCell();
    const stateButton = createStateButton();
    const deleteButton = createDeleteButton();
    tdId.textContent = id;
    tdComment.textContent = todos[id].task;
    tdStateButton.appendChild(stateButton);
    tdDeleteButton.appendChild(deleteButton);
  }

  const createStateButton = () => {
    const stateButton = document.createElement('button');
    stateButton.setAttribute('value', 'working');
    stateButton.textContent = todos[id].status;
    return stateButton
  }
  const createDeleteButton = () => {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('value', '削除');
    deleteButton.textContent = '削除';
    return deleteButton
  }

});