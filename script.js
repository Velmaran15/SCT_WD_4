const form = document.getElementById("todo-form");
const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const taskTime = document.getElementById("task-time");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  const taskDateTime = taskTime.value;

  if (taskText !== "") {
    addTask(taskText, taskDateTime);
    taskInput.value = "";
    taskTime.value = "";
  }
});

function addTask(text, time) {
  const li = document.createElement("li");

  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";
  taskInfo.innerHTML = `<strong>${text}</strong><br><small>${time || ""}</small>`;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✔";
  completeBtn.className = "complete";
  completeBtn.onclick = () => {
    taskInfo.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.innerText = "✎";
  editBtn.className = "edit";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", text);
    const newTime = prompt("Edit time (YYYY-MM-DD HH:MM):", time);
    if (newText) taskInfo.innerHTML = `<strong>${newText}</strong><br><small>${newTime || ""}</small>`;
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🗑";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskInfo);
  li.appendChild(actions);
  taskList.appendChild(li);
}
