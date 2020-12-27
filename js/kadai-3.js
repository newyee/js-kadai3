'use strict';
window.addEventListener('DOMContentLoaded', () => {
  const todos = [];
  document.getElementById('task_add_button').addEventListener('click', () => {
    const taskElem = document.getElementById('task_text');
    const taskText = taskElem.value;
    const tbody = document.getElementById('task_list');
    if(!taskText){
      return
    }
    const todo = {
      task: taskText,
      status: '作業中'
    }
    todos.push(todo);
    displayData(tbody);
    taskElem.value = '';
  });

  const displayData = (tbody) => {
    while(tbody.rows[ 0 ] ) tbody.deleteRow( 0 );
    todos.forEach((_, index) => {
      let row = tbody.insertRow(-1);
      let tdId = row.insertCell();
      let tdComment = row.insertCell();
      let tdStateButton = row.insertCell();
      let tdDeleteButton = row.insertCell();
      let stateButton = createStateButton(index);
      let deleteButton = createDeleteButton(index, tbody);
      tdId.textContent = index;
      tdComment.textContent = todos[index].task;
      tdStateButton.appendChild(stateButton);
      tdDeleteButton.appendChild(deleteButton);
    })
  }

  const createStateButton = (index) => {
    const stateButton = document.createElement('button');
    stateButton.setAttribute('value', 'working');
    stateButton.textContent = todos[index].status;
    stateButton.addEventListener('click', () => {
      if(todos[index].status === '作業中'){
        todos[index].status = '完了';
        stateButton.textContent = todos[index].status;
      }else{
        todos[index].status = '作業中';
        stateButton.textContent = todos[index].status;
      }
    })
    return stateButton
  }

  const createDeleteButton = (index, tbody) => {
    const deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', () => {
      todos.splice(index, 1);
      displayData(tbody);
    })
    deleteButton.textContent = '削除';
    return deleteButton
  }
});