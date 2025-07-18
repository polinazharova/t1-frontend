import { makeAutoObservable } from "mobx";
import {Task} from "../types/task.ts";
import {mockTasks} from "../const/mockTasks.ts";

class TaskStore {
    tasks: Task[] = mockTasks;
    status: string = '';
    priority: string = '';
    category: string = '';
    search: string = '';

    constructor() {
        makeAutoObservable(this);
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

    getTasks() {
        this.tasks = mockTasks;
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    updateTask(updatedTask: Task) {
        const taskIndex = this.tasks.findIndex(task => task.id === updatedTask.id);
        if (taskIndex === -1) {
            console.warn(`Task not found`);
            return;
        }

        this.tasks = [...this.tasks.slice(0, taskIndex),
            updatedTask,
            ...this.tasks.slice(taskIndex + 1)];
    }

    deleteTask(taskId: number) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}

export const taskStore = new TaskStore();