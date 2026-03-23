export function addNewToDoItem(array) {

    const title = document.getElementById("title").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const notes = document.getElementById("notes").value;

    const todo = {
        idTag: crypto.randomUUID(),
        title,
        dueDate,
        priority,
        notes,
        isCompleted: false
    };

    array.push(todo);
}