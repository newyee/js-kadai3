'use strict';
window.addEventListener('DOMContentLoaded', () => {
  const todos = [];
  const tbody = document.getElementById('task_list');
  document.getElementById('check_value_left').addEventListener('click', () => {
    displayData()
  })
  document.getElementById('check_value_middle').addEventListener('click', () => {
    getWorkingStatus()
  })
  document.getElementById('check_value_right').addEventListener('click', () => {
    getCompleteStatus()
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
      getWorkingStatus()
    }else if(completeStatus){
      getCompleteStatus()
    }else{
      displayData();
    }

    taskElem.value = '';

  });

  const getCompleteStatus = () => {
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
      let deleteButton = createDeleteButton(i);
      tdId.textContent = i;
      tdComment.textContent = todos[i].task;
      tdStateButton.appendChild(stateButton);
      tdDeleteButton.appendChild(deleteButton);
    }
  }
  const getWorkingStatus = () => {
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
      let deleteButton = createDeleteButton(i);
      tdId.textContent = i;
      tdComment.textContent = todos[i].task;
      tdStateButton.appendChild(stateButton);
      tdDeleteButton.appendChild(deleteButton);

    }
  }

  const displayData = () => {
    while(tbody.rows[ 0 ]) tbody.deleteRow( 0 );
    todos.forEach((_, index) => {
      let row = tbody.insertRow(-1);
      let tdId = row.insertCell();
      let tdComment = row.insertCell();
      let tdStateButton = row.insertCell();
      let tdDeleteButton = row.insertCell();
      let stateButton = createStateButton(index);
      let deleteButton = createDeleteButton(index);
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
      let leftRadioButton = document.getElementById('check_value_left').checked
      if(leftRadioButton && todos[index].status === '作業中' ){
        todos[index].status = '完了';
        displayData()
        return
      }
      if(leftRadioButton && todos[index].status === '完了'){
        todos[index].status = '作業中';
        displayData()
        return
      }
      if(todos[index].status === '作業中'){
        todos[index].status = '完了';
        getWorkingStatus();
      }else if(todos[index].status === '完了'){
        todos[index].status = '作業中';
        getCompleteStatus()
      }
    })
    return stateButton
  }

  const createDeleteButton = (index) => {
    const deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', () => {
      let rightRadioButton = document.getElementById('check_value_right').checked
      let middleRadioButton = document.getElementById('check_value_middle').checked
      todos.splice(index, 1)
      if(rightRadioButton){
        getCompleteStatus()
      }else if(middleRadioButton){
        getWorkingStatus()
      }else{
        displayData();
      }
    })
    deleteButton.textContent = '削除';
    return deleteButton
  }
});