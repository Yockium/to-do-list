document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");
    const input = document.getElementById("input");
    const list = document.getElementById("list");

    const taskList = [];
    button.addEventListener("click", function() {
        if (input.value.trim() === "") {
            return;
        }
        taskList.push(input.value);
        renderTasks();
        console.log(taskList);
    });

    function renderTasks() {
        list.innerHTML = '';

        taskList.forEach((task, index) => {
            const taskItem = document.createElement("li");
            taskItem.classList.add("taskItem");
            taskItem.id = `taskId-${index}`;
            taskItem.innerText = task;
            list.appendChild(taskItem);

            const removeButton = document.createElement("button");
            removeButton.classList.add("remove");
            removeButton.innerText = "X";
            removeButton.addEventListener("click", function() {
                taskList.splice(index, 1);
                renderTasks();
            });
            taskItem.appendChild(removeButton);

            const completeButton = document.createElement("button");
            completeButton.classList.add("complete");
            completeButton.innerText = "complete";
            completeButton.addEventListener("click", function() {
                taskItem.classList.toggle("completed");
                if (completeButton.innerText === "complete") {
                    completeButton.innerText = "completed";
                }
                else {
                    completeButton.innerText = "complete"
                }
            })
            taskItem.appendChild(completeButton);
        })

    }

    console.log(taskList);
})