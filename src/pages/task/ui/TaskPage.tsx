import {TaskDetails} from "@features/task-details";
import {taskStore} from "@entities/task";
import {useParams} from "react-router-dom";
import {TypographyMainTitle} from "@shared/typography-main-title";
import {Header} from "@widgets/header";


export const TaskPage = () => {
    const {id} = useParams();
    //TODO СРАВНЕНИЕ
    const task = taskStore.tasks?.find((task) => task.id == id);

    if (!task) {
        return null;
    }

    return (
        <>
            <Header/>
            <main>
                <TypographyMainTitle>TASK</TypographyMainTitle>
                <TaskDetails task={task}/>
            </main>
        </>
    )
}