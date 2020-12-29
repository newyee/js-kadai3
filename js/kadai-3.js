'use strict';
window.addEventListener('DOMContentLoaded', () => {
  const todos = [];
  const tbody = document.getElementById('task_list');
  document.getElementById('check_value_left').addEventListener('click', () => {
    displayData(tbody)
  })
  document.getElementById('check_value_middle').addEventListener('click', () => {
    getWorkingStatus(tbody)
  })
  document.getElementById('check_value_right').addEventListener('click', () => {
    getCompleteStatus(tbody)
  })
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
    let workingStatus = document.getElementById('check_value_middle').checked
    let completeStatus = document.getElementById('check_value_right').checked

    if(workingStatus){
      getWorkingStatus(tbody)
    }else if(completeStatus){
      getCompleteStatus(tbody)
    }else{
      displayData(tbody);
    }

    taskElem.value = '';

  });

  const getCompleteStatus = (tbody) => {
    while(tbody.rows[ 0 ]) tbody.deleteRow( 0 );
    for(let i = 0; i < todos.length; ++i){
      if(todos[i].status !== '完了'){
        continue;
      }
      let row = tbody.insertRow(-1);
      let tdId = row.insertCell();
      let tdComment = row.insertCell();
      let tdStateButton = row.insertCell();
      let tdDeleteButton = row.insertCell();
      let stateButton = createStateButton(i);
      let deleteButton = createDeleteButton(i, tbody);
      tdId.textContent = i;
      tdComment.textContent = todos[i].task;
      tdStateButton.appendChild(stateButton);
      tdDeleteButton.appendChild(deleteButton);
    }
  }
  const getWorkingStatus = (tbody) => {
    while(tbody.rows[ 0 ]) tbody.deleteRow( 0 );
    for(let i = 0; i < todos.length; ++i){
      if(todos[i].status !== '作業中'){
        continue;
      }
      let row = tbody.insertRow(-1);
      let tdId = row.insertCell();
      let tdComment = row.insertCell();
      let tdStateButton = row.insertCell();
      let tdDeleteButton = row.insertCell();
      let stateButton = createStateButton(i);
      let deleteButton = createDeleteButton(i, tbody);
      tdId.textContent = i;
      tdComment.textContent = todos[i].task;
      tdStateButton.appendChild(stateButton);
      tdDeleteButton.appendChild(deleteButton);

    }
  }

  const displayData = (tbody) => {
    while(tbody.rows[ 0 ]) tbody.deleteRow( 0 );
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