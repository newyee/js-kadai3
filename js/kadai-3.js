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
    // console.log(todos)
    id = todos.indexOf(todos.slice(-1)[0]);
    displayData(id);
    console.log('slice',todos.indexOf(todos.slice(-1)[0]));
    taskElem.value = '';
  });

  const displayData = (id) => {
    const tbody = document.getElementById('task_list');
    const row = tbody.insertRow(-1);
    // console.log(row.rowIndex);
    const tdId = row.insertCell();
    const tdComment = row.insertCell();
    const tdStateButton = row.insertCell();
    const tdDeleteButton = row.insertCell();
    const stateButton = createStateButton();
    const deleteButton = createDeleteButton(id,row,tbody);
    tdId.textContent = id;
    tdComment.textContent = todos[id].task;
    tdStateButton.appendChild(stateButton);
    tdDeleteButton.appendChild(deleteButton);
  }

  const createStateButton = () => {
    const stateButton = document.createElement('button');
    stateButton.setAttribute('value', 'working');
    console.log('id',id)
    stateButton.textContent = todos[id].status;
    return stateButton
  }

  const createDeleteButton = (id,row,tbody) => {
    const deleteButton = document.createElement('button');
    // deleteButton.setAttribute('value', '削除');
    console.log('row',row);
    // row.deleteRow();
    deleteButton.addEventListener('click', () => {
      todos.splice(id, 1);
      console.log(id);
      tbody.deleteRow(id);
    })
    // deleteButton.onclick = deleteRow;
    deleteButton.textContent = '削除';
    return deleteButton
  }

});