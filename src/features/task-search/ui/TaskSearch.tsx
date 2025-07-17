import {TextField} from "@mui/material";
import {taskStore} from "@entities/task";

export const TaskSearch = () => {
    return (
        <TextField
            label="Search by title or description"
            variant="outlined"
            value={taskStore.search}
            onChange={(e) => taskStore.setSearch(e.target.value)}
            sx={{ mb: 3 }}
        />
    )
}