import {TaskList} from "../../../widgets/task-list";
import {taskStore} from "../../../entities/task";
import {TaskFilter} from "../../../features/task-filter";
import {TypographyMainTitle} from "../../../shared/typography-main-title";

export const MainPage = () => {
    const tasks = taskStore.tasks;

    return (
        <main>
            <TaskFilter />
            <TypographyMainTitle>TASKS</TypographyMainTitle>
            <TaskList initTasks={tasks} />
        </main>
    )
}