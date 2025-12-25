const form = document.getElementById("fitnessForm");
const list = document.getElementById("goalList");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const goal = document.getElementById("goal").value;
  const progress = document.getElementById("progress").value;

  const item = document.createElement("li");
  item.textContent = `${goal} - ${progress}% complete`;
  list.appendChild(item);

  form.reset();
});
