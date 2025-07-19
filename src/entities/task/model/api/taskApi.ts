import {apiService} from "@shared/api";
import {Task} from "@entities/task";

export const taskApi = {
    async getTasks() {
        try {
            const response = await apiService.get<Task[]>('/tasks');
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    async getTask(id: string) {
        try {
            const response = await apiService.get<Task>(`/task/${id}`);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    async addTask(task: Task) {
        try {
            const response = await apiService.post<{id : string}>('/tasks', task);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    async updateTask(id: string, task: Task) {
        try {
            const response = await apiService.put<Task>(`/task/${id}`, task);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    async deleteTask(id: string) {
        try {
            const response = await apiService.delete<boolean>(`/task/${id}`);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
}