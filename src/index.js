import "./styles.css";

import { state } from "./state.js";
import { renderTodos, renderFolders } from "./createDOM.js";
import { addNewToDoItem } from "./createToDoEvent.js";
import { createFolderSubmission, makeNewFolderBtn } from "./createFolders.js";
import { loadState, saveState } from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {

    loadState();

    if (state.projects.length === 0) {
        state.projects.push({
            idTag: crypto.randomUUID(),
            title: "Default",
            items: []
        });
    }

    state.activeProject = state.projects[0];

    makeNewFolderBtn();

    renderFolders(state.projects);
    renderTodos(state.activeProject.items);

    const todoForm = document.getElementById("toDoForm");

    todoForm.addEventListener("submit", (event) => {

        event.preventDefault();

        addNewToDoItem(state.activeProject.items);

        renderTodos(state.activeProject.items);

        saveState();

        todoForm.reset();
    });

    document.getElementById('newToDo').addEventListener('click', () => {
        document.getElementById('toDoFormContainer').style.display = 'block';
    })

    document.getElementById('toDoDone').addEventListener('click', () => {
        document.getElementById('toDoFormContainer').style.display = 'none';
    })

    document.getElementById("folderForm").addEventListener("submit", (event) => {

        event.preventDefault();

        createFolderSubmission(state.projects);

        renderFolders(state.projects);

        saveState();

        event.target.reset();
    });

    document.getElementById('folderDone').addEventListener('click', () => {
        document.getElementById('folderFormContainer').style.display = 'none';
    })

    document.body.addEventListener("click", (event) => {

        if (event.target.closest(".folder")) {

            const folderCard = event.target.closest(".folder");

            const title = folderCard.querySelector(".title").textContent;

            state.activeProject = state.projects.find(
                p => p.title === title
            );

            renderTodos(state.activeProject.items);
        }

        if (event.target.classList.contains("deleteBtn")) {

            const todoCard = event.target.closest(".card");

            if (todoCard) {

                const id = todoCard.querySelector(".uuid").textContent;

                const index = state.activeProject.items.findIndex(
                    item => item.idTag === id
                );

                if (index !== -1) {
                    state.activeProject.items.splice(index, 1);
                    renderTodos(state.activeProject.items);
                    saveState();
                }

                return;
            }

            // --- DELETE FOLDER ---
            const folderCard = event.target.closest('.folder');

            if (folderCard) {

                const id = folderCard.querySelector(".uuid").textContent;

                const index = state.projects.findIndex(
                    project => project.idTag === id
                );

                if (index !== -1) {

                    state.projects.splice(index, 1);

                    renderFolders(state.projects);

                    saveState();
                }
            }
        }    
    });
});



// need to figure out why the folders wont be removed. theyre in the projects array but wont GET OUT