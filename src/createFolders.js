export function makeNewFolderBtn() {

    const btn = document.createElement("button");

    btn.id = "newFolder";
    btn.textContent = "New Folder";

    document.getElementById("sidebarTop").append(btn);

    btn.addEventListener("click", () => {

        const container = document.getElementById("folderFormContainer");

        container.style.display = "block";
    });
}

export function createFolderSubmission(projects) {

    const title = document.getElementById("folderTitle").value;

    const folder = {
        idTag: crypto.randomUUID(),
        title,
        items: []
    };

    projects.push(folder);
}