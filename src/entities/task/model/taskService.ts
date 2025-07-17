import {taskStore} from "./store/TaskStore";
import {Task} from "./types/task.ts";

export const taskService = {
    getTasks() {
        taskStore.getTasks();
    },

    deleteTask(taskId : number) {
        taskStore.deleteTask(taskId);
    },

    updateTask(updatedTask : Task) {
        taskStore.updateTask(updatedTask);
    }
}