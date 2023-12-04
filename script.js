let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

const addTask = () => {
  if (taskInput.value === "") {
    alert("You Must Write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    taskList.appendChild(li);
  }
  taskInput.value = "";
  saveData();
};

const emptyTaskList = () => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  saveData();
};

const saveData = () => {
  localStorage.setItem("data", taskList.innerHTML);
};

const showData = () => {
  taskList.innerHTML = localStorage.getItem("data");
};
showData();

taskList.addEventListener("dblclick", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  saveData();
});

const checkedTaskList = () => {
  let checked = document.querySelectorAll(".checked");
  checked.forEach((task) => {
    task.remove();
  });
  saveData();
};
