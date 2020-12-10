'use strict';

window.addEventListener('DOMContentLoaded', function(e){
  let id = 0;
  document.querySelector("#task_add_button").addEventListener('click',function(){
    let task_text = document.getElementById("task_text").value
    // console.log(task_text);
    if(task_text){
      // console.log(task_text);
      let tbody = document.getElementById("task_list")
      console.log(tbody)
      let row = tbody.insertRow(-1)
      let td_id = row.insertCell();
      let td_comment = row.insertCell();
      let td_state_button = row.insertCell();
      let td_delete_button = row.insertCell();
      let state_button = document.createElement("button");
      let delete_button = document.createElement("button");
      state_button.setAttribute("value","working");
      delete_button.setAttribute("value","削除");
      state_button.textContent = "作業中";
      delete_button.textContent = "削除";
      td_id.textContent = id;
      td_comment.textContent = task_text;
      td_state_button.appendChild(state_button);
      td_delete_button.appendChild(delete_button);
      // console.log(task_text);
      id += 1;
      // console.log('td',td)
      // row_1.appendChild(td);
    }

  });
});