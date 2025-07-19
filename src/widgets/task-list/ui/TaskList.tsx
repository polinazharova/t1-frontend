import {Task, TaskItem, taskStore} from "@/entities/task";
import {useState} from "react";
import {filterTasks} from "../model/lib/filterTasks.ts";
import Grid from '@mui/material/Grid';
import {observer} from "mobx-react-lite";
import {DeleteConfirmForm, DeleteTaskButton} from "@features/delete-task";


export const TaskList = observer(() => {
    const [deletingTaskId, setDeletingTaskId] = useState<number | string | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const {priority, status, category, search, isDescending, tasks } = taskStore;
    const filteredTasks = filterTasks(priority, category, status, search, isDescending, tasks);

    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                justifyContent: "center",
                alignItems: "center",
                p: 4,
                pt: 1,
            }}>
            {
                filteredTasks?.map((task: Task) => (
                    <Grid key={task.id} size={{ xs: 12, sm: 6, md: 4 }}>
                        <TaskItem task={task} actions={<DeleteTaskButton taskId={task.id} setDialogOpen={() => {setDialogOpen(true)}} setDeletingTaskId={setDeletingTaskId}/>} />
                    </Grid>
                ))
            }
            <DeleteConfirmForm open={dialogOpen} onClose={() => {setDialogOpen(false)}} onConfirm={() => {taskStore.deleteTask(deletingTaskId as string); setDialogOpen(false);}} />
        </Grid>
    )
})