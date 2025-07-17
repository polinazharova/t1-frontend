import {Task, TaskItem, taskStore} from "@/entities/task";
import {useEffect, useState} from "react";
import {filterTasks} from "../model/lib/filterTasks.ts";
import Grid from '@mui/material/Grid';

interface Props {
    initTasks: Task[] | null;
}

export const TaskList = ({initTasks}: Props) => {
    const {priority, status, category, search} = taskStore;
    const [tasks, setTasks] = useState<Task[] | null>(filterTasks(priority, category, status, search, initTasks));

    useEffect(() => {
        setTasks(filterTasks(priority, category, status, search, initTasks));
    }, [priority, status, category, search, initTasks])


    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                justifyContent: "center",
                alignItems: "center",
                p: 4,
                pt: 1,
            }}>
            {
                tasks?.map((task: Task) => (
                    <Grid key={task.id} size={{ xs: 12, sm: 6, md: 4 }}>
                        <TaskItem task={task}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}