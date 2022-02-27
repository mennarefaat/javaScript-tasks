let todoTable=document.querySelector("table")
let addButton = document.querySelector("button");
let todoInput = document.querySelector("input");
addButton.addEventListener("click", function(){
    let todoValue=todoInput.value
    let tr = document.createElement("tr");
    let tdTodo = document.createElement("td");
    tdTodo.innerText = todoValue;
    tr.append(tdTodo);
    td = document.createElement("td");
    let checkBox = document.createElement("input");
    checkBox.type="checkbox"
    checkBox.innerText = "checkBox";
    checkBox.addEventListener("click", function () {
      if(checkBox.value=this.checked){
        tdTodo.style.textDecoration="line-through"
      }else{
        tdTodo.style.textDecoration="none"
      }
    });
    td.append(checkBox);
  
    tr.append(td);
  
    td = document.createElement("td");
    let button = document.createElement("button");
    button.innerText = "delete";
  
    button.addEventListener("click", function () {
      this.parentElement.parentElement.remove();
    });
  
    td.append(button);
  
    tr.append(td);
  
    todoTable.append(tr)

})