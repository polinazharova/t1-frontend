import { makeAutoObservable } from "mobx";
import { Task } from "../types/task.ts";

class TaskStore {
  tasks: Task[] = [];
  task: Task | null = null;
  status: string = "";
  priority: string = "";
  category: string = "";
  search: string = "";
  loading: "idle" | "loading" = "idle";
  error: string = "";
  isDescending = true;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(loading: "idle" | "loading") {
    this.loading = loading;
  }

  setError(error: string) {
    this.error = error;
  }

  setTask(task: Task) {
    this.task = task;
  }

  setTasks(tasks: Task[]) {
    this.tasks = tasks;
  }

  setIsDescending(isDescending: boolean) {
    this.isDescending = isDescending;
  }

  setSearch(search: string) {
    this.search = search;
  }

  setStatus(status: string) {
    this.status = status;
  }

  setPriority(priority: string) {
    this.priority = priority;
  }

  setCategory(category: string) {
    this.category = category;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  updateTask(updatedTask: Task) {
    const taskIndex = this.tasks.findIndex(
      (task) => task.id === updatedTask.id,
    );
    if (taskIndex === -1) {
      console.warn(`Task not found`);
      return;
    }

    this.tasks = [
      ...this.tasks.slice(0, taskIndex),
      updatedTask,
      ...this.tasks.slice(taskIndex + 1),
    ];
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}

export const taskStore = new TaskStore();
