import { TaskDetails } from "@features/task-details";
import { useParams } from "react-router-dom";
import { TypographyMainTitle } from "@shared/typography-main-title";
import { Header } from "@widgets/header";
import { useEffect } from "react";
import { taskService } from "@entities/task";

export const TaskPage = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      taskService.getTask(id);
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <TypographyMainTitle>TASK</TypographyMainTitle>
        <TaskDetails />
      </main>
    </>
  );
};
