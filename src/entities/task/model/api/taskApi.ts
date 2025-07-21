import { apiService } from "@shared/api";
import { Task } from "@entities/task";

export const taskApi = {
  async getTasks() {
    try {
      const response = await apiService.get<Task[]>("/tasks");
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        throw error;
      } else {
        console.error(error || "Undefined error");
        throw new Error((error || "Undefined error") as string);
      }
    }
  },

  async getTask(id: string) {
    try {
      const response = await apiService.get<Task>(`/task/${id}`);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        throw error;
      } else {
        console.error(error || "Undefined error");
        throw new Error((error || "Undefined error") as string);
      }
    }
  },

  async addTask(task: Task) {
    try {
      const response = await apiService.post<{ id: string }>("/tasks", task);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        throw error;
      } else {
        console.error(error || "Undefined error");
        throw new Error((error || "Undefined error") as string);
      }
    }
  },

  async updateTask(id: string, task: Task) {
    try {
      const response = await apiService.put<Task>(`/task/${id}`, task);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        throw error;
      } else {
        console.error(error || "Undefined error");
        throw new Error((error || "Undefined error") as string);
      }
    }
  },

  async deleteTask(id: string) {
    try {
      const response = await apiService.delete<boolean>(`/task/${id}`);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        throw error;
      } else {
        console.error(error || "Undefined error");
        throw new Error((error || "Undefined error") as string);
      }
    }
  },
};
