function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    // 点击完成（划线）
    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    // 双击删除
    li.ondblclick = function () {
        li.remove();
    };

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}