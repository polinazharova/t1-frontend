import {TaskDetails} from "../../../features/task-details";
import {useTasks} from "../../../entities/task";
import {useParams} from "react-router-dom";
import {TypographyMainTitle} from "../../../shared/typography-main-title";


export const TaskPage = () => {
    const {id} = useParams();
    const task = useTasks().tasks?.find((task) => task.id === Number(id));

    if (!task) {
        return null;
    }

    return (
        <main>
            <TypographyMainTitle>TASK</TypographyMainTitle>
            <TaskDetails task={task} />
        </main>
    )
}