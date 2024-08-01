document.addEventListener("DOMContentLoaded", function(event) {
    const button = document.getElementById("button");
    const input = document.getElementById("input");
    const list = document.getElementById("list");

    const taskList = [];
    button.addEventListener("click", function(event) {
        addTask(input.value);
        console.log(taskList);
    });

    function addTask(value) {
        taskList.push(value);
    }

    console.log(taskList);
})