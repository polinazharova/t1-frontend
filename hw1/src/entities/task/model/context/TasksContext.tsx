import {createContext, useState, ReactNode, useContext} from 'react';
import {Task} from "../types/task.ts";
import {mockTasks} from "../const/mockTasks.ts";

type TasksContextType = {
    tasks: Task[] | null;
    setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>;
    editTask: (id: number, updatedTask: Task) => void;
};

const TasksContext = createContext<TasksContextType>({
    tasks: null,
    setTasks: () => {},
    editTask: () => {},
});

type TasksProviderProps = {
    children: ReactNode;
};

export function TasksProvider({ children }: TasksProviderProps) {
    const [tasks, setTasks] = useState<Task[] | null>(mockTasks);

    const editTask = ((oldTaskId: number, updatedTask: Task) => {
        setTasks(prevTasks => {
            if (!prevTasks) return null;

            const taskIndex = prevTasks.findIndex(task => task.id === oldTaskId);
            if (taskIndex === -1) {
                console.warn(`Task with id ${oldTaskId} not found`);
                return prevTasks;
            }

            return [
                ...prevTasks.slice(0, taskIndex),
                { ...prevTasks[taskIndex], ...updatedTask },
                ...prevTasks.slice(taskIndex + 1)
            ];
        });
    });

    return (
        <TasksContext.Provider value={{tasks, setTasks, editTask}}>
            {children}
        </TasksContext.Provider>
    );
}

export function useTasks() {
    const context = useContext(TasksContext);
    if (context === undefined) {
        throw new Error('useTasks must be used within a TasksProvider');
    }
    return context;
}