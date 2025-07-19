import {FormEvent } from "react";
import {Tags, Task} from "@entities/task/model/types/task";
import {
    Box,
    Button,
    OutlinedInput, SelectChangeEvent,
    TextField,
    Typography
} from '@mui/material';
import {priorityList} from "@widgets/task-list/model/const/priority";
import {statusList} from "@widgets/task-list/model/const/status";
import {categoryList} from "@widgets/task-list/model/const/category";
import {useNavigate } from "react-router-dom";
import {StyledFormControl} from "@shared/styled-form-control";
import {StyledInputLabel} from "@shared/styled-input-label";
import {StyledSelect} from "@shared/styled-select";
import {StyledMenuItem} from "@shared/styled-menu-item";
import {taskService, taskStore} from "@entities/task";
import {observer} from "mobx-react-lite";


export const TaskDetails = observer(() => {
    const navigate = useNavigate();
    const task = taskStore.task;

    if (!task) {
        return null;
    }

    const handleTagChange = (event : SelectChangeEvent<unknown>, tagType: keyof Tags) => {
        taskService.setTask({
            ...task,
            tags: {...task.tags, [tagType]: event.target.value as string},
        });
    };

    const onSubmit = (event : FormEvent) => {
        event.preventDefault();
        const updatedTask : Task = {
            id : task.id,
            title : task.title,
            description: task.description,
            tags: task.tags,
            createdAt : task.createdAt,
            updatedAt: new Date(),
        }
        taskService.updateTask(updatedTask.id, updatedTask);
        onClickCancel();
    }

    const onClickCancel = () => {navigate('/')};

    return (
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 2, px: 4}}>
            <TextField
                label="Title"
                variant="outlined"
                fullWidth
                required
                value={task.title}
                onChange={(e) => taskService.setTask({...task, title: e.target.value})}
                sx={{ mb: 3 }}
            />

            <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={task?.description || ""}
                onChange={(e) => taskService.setTask({...task, description: e.target.value})}
                sx={{ mb: 3 }}
            />

            <Typography sx={{mb: 2, textAlign: "center"}} variant="subtitle1" gutterBottom>
                Task Tags
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: "center", gap: 2, mb: 3, flexWrap: 'wrap' }}>
                <StyledFormControl sx={{ minWidth: 200 }}>
                    <StyledInputLabel>Category</StyledInputLabel>
                    <StyledSelect
                        value={task.tags.category}
                        onChange={(event) => {handleTagChange(event, 'category')}}
                        input={<OutlinedInput label="Category" />}
                    >
                        {categoryList.map(option => (
                            <StyledMenuItem key={option} value={option}>
                                {option}
                            </StyledMenuItem>
                        ))}
                    </StyledSelect>
                </StyledFormControl>

                <StyledFormControl sx={{ minWidth: 200 }}>
                    <StyledInputLabel>Status</StyledInputLabel>
                    <StyledSelect
                        value={task.tags.status}
                        onChange={(event) => {handleTagChange(event, 'status')}}
                        input={<OutlinedInput label="Status" />}
                    >
                        {statusList.map(option => (
                            <StyledMenuItem key={option} value={option}>
                                {option}
                            </StyledMenuItem>
                        ))}
                    </StyledSelect>
                </StyledFormControl>

                <StyledFormControl sx={{ minWidth: 200 }}>
                    <StyledInputLabel>Priority</StyledInputLabel>
                    <StyledSelect
                        value={task.tags.priority}
                        onChange={(event) => {handleTagChange(event, 'priority')}}
                        input={<OutlinedInput label="Priority" />}
                    >
                        {priorityList.map(option => (
                            <StyledMenuItem key={option} value={option}>
                                {option}
                            </StyledMenuItem>
                        ))}
                    </StyledSelect>
                </StyledFormControl>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button variant="outlined" size="large" onClick={onClickCancel}>
                    Back
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={!task.title}
                >
                    Save
                </Button>
            </Box>
        </Box>
    )
})