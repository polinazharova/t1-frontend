import {taskStore} from "@entities/task";
import {Task} from "./types/task.ts";

export const taskService = {
    getTasks() {
        taskStore.getTasks();
        //ZAPROS K API
    },

    deleteTask(taskId : number) {
        taskStore.deleteTask(taskId);
        //ZAPROS K API
    },

    addTask(task: Task) {
        taskStore.addTask(task);
        //ZAPROS K API
    },

    updateFullTask(updatedTask : Task) {
        taskStore.updateTask(updatedTask);
        //ZAPROS K API
    },

    updateTask(updatedTask : Task) {
        //ZAPROS K API
    }
}