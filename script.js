// info fecha
const dateNumber = document.querySelector(".dateNumber");
const dateText = document.querySelector(".dateText");
const dateMonth = document.querySelector(".dateMonth");
const dateYear = document.querySelector(".dateYear");

// Task container
const taskContainer = document.querySelector(".taskContainer");

const setDate = function () {
  const date = new Date();
  dateNumber.textContent = date.toLocaleDateString("es", { day: "numeric" });
  dateText.textContent = date.toLocaleDateString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleDateString("es", { month: "short" });
  dateYear.textContent = date.toLocaleDateString("es", { year: "numeric" });
};

const addNewTask = function (event) {
  event.preventDefault();
  const { value } = event.target.taskText;
  if (!value) return; // si no hay valor ingresado. no hara nada
  const task = document.createElement("div");
  task.classList.add("task", "roundBorder");
  task.addEventListener("click", changeTaskEstate);
  task.textContent = value;
  console.log(taskContainer);
  taskContainer.prepend(task); // agrega  al principio del container la tarea
  event.target.reset();
};

const changeTaskEstate = function (event) {
  event.target.classList.toggle("done"); // accede a la clase y la cambia a done
};

setDate();
