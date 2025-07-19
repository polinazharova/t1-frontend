import styles from "./TaskFilter.module.css";
import { PriorityFilter } from "../PriorityFilter/PriorityFilter";
import { StatusFilter } from "../StatusFilter/StatusFilter";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter";
import { Box, Button, Stack } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { taskStore } from "@entities/task";
import { DateSortButton } from "@features/task-filter/ui/DateSortButton/DateSortButton.tsx";

export const TaskFilter = () => {
  return (
    <div className={styles["task-filter"]}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ mt: 2 }}>
        <StatusFilter />
        <PriorityFilter />
        <CategoryFilter />
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          width: "75%",
        }}
      >
        <DateSortButton />
        <Button
          onClick={() => {
            taskStore.setStatus("");
            taskStore.setPriority("");
            taskStore.setCategory("");
            taskStore.setIsDescending(true);
          }}
          variant="outlined"
          color="primary"
          startIcon={<RestartAltIcon />}
        >
          Reset filters
        </Button>
      </Box>
    </div>
  );
};
