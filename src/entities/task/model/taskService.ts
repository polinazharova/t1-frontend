import { taskStore } from "@entities/task";
import { Task } from "./types/task.ts";
import { taskApi } from "@entities/task/model/api/taskApi.ts";

export const taskService = {
  setTask(task: Task) {
    taskStore.setTask(task);
  },

  async getTasks() {
    try {
      taskStore.setLoading("loading");
      taskStore.setError("");

      const tasks = await taskApi.getTasks();
      taskStore.setTasks(tasks);
      taskStore.setLoading("idle");
    } catch (error) {
      if (error instanceof Error) {
        taskStore.setError(error.message);
      } else {
        taskStore.setError(error as string);
      }
      taskStore.setLoading("idle");
    }
  },

  async getTask(id: string) {
    try {
      taskStore.setLoading("loading");
      taskStore.setError("");

      const task = await taskApi.getTask(id);
      taskStore.setTask(task);
      taskStore.setLoading("idle");
    } catch (error) {
      if (error instanceof Error) {
        taskStore.setError(error.message);
      } else {
        taskStore.setError(error as string);
      }
      taskStore.setLoading("idle");
    }
  },

  async deleteTask(taskId: string) {
    try {
      await taskApi.deleteTask(taskId);
      taskStore.deleteTask(taskId);
    } catch (error) {
      console.log(error);
    }
  },

  async addTask(task: Task) {
    try {
      const newId = (await taskApi.addTask(task)).id;
      task.id = newId;

      taskStore.addTask(task);
    } catch (error) {
      console.log(error);
    }
  },

  async updateTask(id: string, updatedTask: Task) {
    try {
      await taskApi.updateTask(id, updatedTask);
      taskStore.updateTask(updatedTask);
    } catch (error) {
      console.log(error);
    }
  },
};
