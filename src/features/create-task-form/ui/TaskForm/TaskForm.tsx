import React, {useState} from 'react';
import {
    Box,
    Button,
    Paper,
    Grid, InputAdornment,
} from '@mui/material';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {Task, taskStore} from "@entities/task";
import {TypographyMainTitle} from "@shared/typography-main-title";
import {StyledTextField} from "@shared/styled-textfield";
import {StyledInputLabel} from "@shared/styled-input-label";
import {StyledSelect} from "@shared/styled-select";
import {StyledFormControl} from "@shared/styled-form-control";
import {priorityList} from "@widgets/task-list/model/const/priority.ts";
import {StyledMenuItem} from "@shared/styled-menu-item";
import {statusList} from "@widgets/task-list/model/const/status.ts";
import {categoryList} from "@widgets/task-list/model/const/category.ts";
import {format} from "date-fns";
import {useParams} from "react-router-dom";
import TitleIcon from '@mui/icons-material/Title';
import SubjectIcon from '@mui/icons-material/Subject';
import FlagIcon from '@mui/icons-material/Flag';
import CategoryIcon from '@mui/icons-material/Category';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SaveIcon from '@mui/icons-material/Save';
import { nanoid } from 'nanoid';
import {toJS} from "mobx";


interface Props {
    onClickCancel: () => void;
}

export const TaskForm = ({onClickCancel}: Props) => {
    const {id} = useParams();
    //TODO СРАВНЕНИЕ
    const task = taskStore.tasks.find((task) => task.id == id);
    console.log(toJS(taskStore.tasks));

    const [newTask, setNewTask] = useState<Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>({
        title: task?.title || '',
        description: task?.description || '',
        tags: task?.tags || {
            category: categoryList[0],
            status: statusList[0],
            priority: priorityList[0]
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const finalTask: Task = {
            ...newTask,
            id: task?.id || nanoid(10),
            createdAt: task?.createdAt || format(new Date(), 'dd.MM.yyyy HH:mm'),
            updatedAt: format(new Date(), 'dd.MM.yyyy HH:mm'),
        };
        if (task) {
            taskStore.updateTask(finalTask);
        } else {
            taskStore.addTask(finalTask);
        }
        onClickCancel();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setNewTask(prev => ({...prev, [name]: value}));
    };

    const handleTagsChange = (e: any) => {
        const {name, value} = e.target;
        setNewTask(prev => ({
            ...prev,
            tags: {
                ...prev.tags,
                [name]: value
            }
        }));
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Paper elevation={3}  sx={{p: 3, pt: 1, maxWidth: 'inherit', margin: 'auto', borderRadius: 2}}>
                <TypographyMainTitle>{task ? 'Update' : 'Create'} task</TypographyMainTitle>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <StyledTextField
                                fullWidth
                                label="Title"
                                name="title"
                                value={newTask.title}
                                onChange={handleChange}
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <TitleIcon color="action" />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>

                        <Grid size={12}>
                            <StyledTextField
                                fullWidth
                                label="Description"
                                name="description"
                                value={newTask.description}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SubjectIcon color="action" />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>

                        <Grid size={12}>
                            <StyledFormControl fullWidth>
                                <StyledInputLabel><FlagIcon fontSize="small" /> Priority</StyledInputLabel>
                                <StyledSelect
                                    name="priority"
                                    value={newTask.tags.priority}
                                    onChange={handleTagsChange}
                                    label="Priority"
                                >
                                    {
                                        priorityList.map((priority) => (
                                            <StyledMenuItem key={priority} value={priority}>{priority}</StyledMenuItem>
                                        ))
                                    }
                                </StyledSelect>
                            </StyledFormControl>
                        </Grid>

                        <Grid size={12}>
                            <StyledFormControl fullWidth>
                                <StyledInputLabel><ChecklistIcon fontSize="small" /> Status</StyledInputLabel>
                                <StyledSelect
                                    name="status"
                                    value={newTask.tags.status}
                                    onChange={handleTagsChange}
                                    label="Status"
                                >
                                    {
                                        statusList.map((status) => (
                                            <StyledMenuItem key={status} value={status}>{status}</StyledMenuItem>
                                        ))
                                    }
                                </StyledSelect>
                            </StyledFormControl>
                        </Grid>

                        <Grid size={12}>
                            <StyledFormControl fullWidth>
                                <StyledInputLabel><CategoryIcon fontSize="small" /> Category</StyledInputLabel>
                                <StyledSelect
                                    name="category"
                                    value={newTask.tags.category}
                                    onChange={handleTagsChange}
                                    label="Category"
                                >
                                    {
                                        categoryList.map((category) => (
                                            <StyledMenuItem key={category} value={category}>{category}</StyledMenuItem>
                                        ))
                                    }
                                </StyledSelect>
                            </StyledFormControl>
                        </Grid>

                        <Grid size={12}>
                            <Box sx={{display: 'flex', justifyContent: 'flex-end', gap: 2}}>
                                <Button onClick={onClickCancel} variant="outlined">Cancel</Button>
                                <Button startIcon={<SaveIcon />} disabled={!newTask.title || !newTask.tags.category || !newTask.tags.status || !newTask.tags.priority} type="submit" variant="contained" color="primary">
                                    Save
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </LocalizationProvider>
    );
};