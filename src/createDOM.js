import { format } from "date-fns";

export function renderTodos(array) {

    const content = document.getElementById("content");

    content.textContent = "";

    array.forEach(obj => {

        const card = document.createElement("div");
        card.classList.add("card", "toDoItem");

        const uuid = document.createElement("div");
        uuid.classList.add("uuid");
        uuid.textContent = obj.idTag;

        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = obj.title;

        const due = document.createElement("div");
        due.classList.add("dueDate");

        const formatted = format(new Date(obj.dueDate), "MMMM do, yyyy");

        due.textContent = formatted;

        const priority = document.createElement("div");
        priority.classList.add("priority");
        priority.textContent = obj.priority;

        const notes = document.createElement("div");
        notes.classList.add("notes");
        notes.textContent = obj.notes;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.textContent = "Remove Item";

        card.append(uuid, title, due, priority, notes, deleteBtn);

        content.append(card);
    });
}

export function renderFolders(array) {

    const sidebar = document.getElementById("folderList");

    sidebar.textContent = "";

    array.forEach(obj => {

        const card = document.createElement("div");

        card.classList.add("folder");

        const uuid = document.createElement("div");
        uuid.classList.add("uuid");
        uuid.textContent = obj.idTag;

        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = obj.title;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.textContent = "Remove Item";

        card.append(uuid, title, deleteBtn);

        sidebar.append(card);
    });
}
