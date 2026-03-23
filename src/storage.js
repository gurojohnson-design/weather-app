import { state } from "./state.js";

export function saveState() {
  localStorage.setItem("projects", JSON.stringify(state.projects));
}

export function loadState() {
  const saved = JSON.parse(localStorage.getItem("projects"));

  if (!saved) return;

  state.projects = saved;
  state.activeProject = state.projects[0];
}