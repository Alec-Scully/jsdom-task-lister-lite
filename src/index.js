document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('#create-task-form').addEventListener('submit', submitHandler)
  // console.log("I ran")
});


function submitHandler(e) {
  e.preventDefault()
  // console.log("This ran too!")
  // console.log(e.target.newTaskDescription.value)

  newTask = e.target.newTaskDescription.value

  taskList = document.querySelector('#tasks')
  taskItem = document.createElement('li')
  taskItem.innerText = newTask

  xButton = document.createElement('input')
  xButton.id = 'x'
  xButton.type = 'submit'
  xButton.value = 'x'
  // <input id = "x" type="submit" value="x">
  xButton.addEventListener('click', () => deleteTask(taskItem))

  taskItem.appendChild(xButton)
  taskList.appendChild(taskItem)
}


function deleteTask(taskItem) {
  taskItem.remove()
}

/*
    <form id="create-task-form" action="#" method="post">
      <label for="new-task-description">Task description:</label>
      <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
      <input id="submit-button" type="submit" value="Create New Task">
    </form>
*/





/*
  Identify the node that has the imput form
    Capture that in a variable      (SubmitHandler)

  Write a function that will handle the "submit"


  Write the function that changes the DOM
    Set variables
    Append changes

*/