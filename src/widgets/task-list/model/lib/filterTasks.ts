import {Task} from "../../../../entities/task";

export const filterTasks = (priority : string, category : string, status : string, tasks: Task[] | null) => {
    if (!tasks) {
        return tasks;
    }

    return tasks.filter(task => (
        (task.tags.priority === priority || priority === '') &&
        (task.tags.status === status || status === '') &&
        (task.tags.category === category || category === '')
    ))
}