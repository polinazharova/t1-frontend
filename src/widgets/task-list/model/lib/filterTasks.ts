import {Task} from "@entities/task";

export const filterTasks = (priority : string, category : string, status : string, search: string, isDescending : boolean, tasks: Task[] | null) => {
    if (!tasks || !tasks.length) {
        return tasks;
    }

    const newTasks = [...tasks];
    if (isDescending) {
        newTasks.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }

    if (!isDescending) {
        newTasks.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return newTasks.filter(task => (
        (task.tags.priority === priority || priority === '') &&
        (task.tags.status === status || status === '') &&
        (task.tags.category === category || category === '') &&
        (task.title.toLowerCase().includes(search.toLowerCase()) || task.description?.toLowerCase()?.includes(search.toLowerCase()) || search === '')
    ))
}