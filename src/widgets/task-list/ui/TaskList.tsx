import { Task, TaskItem, TaskItemSkeleton, taskStore } from "@/entities/task";
import { useEffect, useState } from "react";
import { filterTasks } from "../model/lib/filterTasks.ts";
import Grid from "@mui/material/Grid";
import { observer } from "mobx-react-lite";
import { DeleteConfirmForm, DeleteTaskButton } from "@features/delete-task";
import { taskService } from "@entities/task/model/taskService.ts";
import { InfoMessage } from "@shared/info-message";

export const TaskList = observer(() => {
  const [deletingTaskId, setDeletingTaskId] = useState<number | string | null>(
    null,
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    taskService.getTasks();
  }, []);

  const {
    priority,
    status,
    category,
    search,
    isDescending,
    tasks,
    loading,
    error,
  } = taskStore;
  const filteredTasks = filterTasks(
    priority,
    category,
    status,
    search,
    isDescending,
    tasks,
  );

  if (loading === "loading") {
    return (
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          p: 4,
          pt: 1,
        }}
      >
        {[...Array(6)].map((_, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <TaskItemSkeleton />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (error) {
    return <InfoMessage color="error">{error}</InfoMessage>;
  }

  if (!filteredTasks || !filteredTasks.length) {
    return <InfoMessage>No tasks have found</InfoMessage>;
  }

  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        p: 4,
        pt: 1,
      }}
    >
      {filteredTasks?.map((task: Task) => (
        <Grid key={task.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <TaskItem
            task={task}
            actions={
              <DeleteTaskButton
                taskId={task.id}
                setDialogOpen={() => {
                  setDialogOpen(true);
                }}
                setDeletingTaskId={setDeletingTaskId}
              />
            }
          />
        </Grid>
      ))}
      <DeleteConfirmForm
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
        onConfirm={() => {
          taskService.deleteTask(deletingTaskId as string);
          setDialogOpen(false);
        }}
      />
    </Grid>
  );
});
