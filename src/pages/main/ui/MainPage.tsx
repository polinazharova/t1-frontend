import {TaskList} from "@widgets/task-list";
import {taskStore} from "@entities/task";
import {TaskFilter} from "@features/task-filter";
import {TypographyMainTitle} from "@shared/typography-main-title";
import {TaskSearch} from "@features/task-search";

export const MainPage = () => {
    const tasks = taskStore.tasks;

    return (
        <main>
            <TaskSearch />
            <TaskFilter />
            <TypographyMainTitle>TASKS</TypographyMainTitle>
            <TaskList initTasks={tasks} />
        </main>
    )
}