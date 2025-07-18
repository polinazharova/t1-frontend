import styles from './TaskFilter.module.css'
import {PriorityFilter} from "../PriorityFilter/PriorityFilter";
import {StatusFilter} from "../StatusFilter/StatusFilter";
import {CategoryFilter} from "../CategoryFilter/CategoryFilter";
import {Box, Button, Stack} from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {taskStore} from "@entities/task";
import {SortButton} from "@features/task-filter/ui/Sort/Sort.tsx";

export const TaskFilter = () => {
    return (
        <div className={styles["task-filter"]}>
            <Stack
                direction={{xs: 'column', md: 'row'}}
                spacing={2}
                sx={{mt: 2}}
            >
                <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <StatusFilter/>
                    //TODO СОРТИРОВКА
                    <SortButton onSortChange={() => {}} />
                </Box>
                <PriorityFilter/>
                <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                    <CategoryFilter/>
                    <Button
                        onClick={() => {
                            taskStore.setStatus('');
                            taskStore.setPriority('');
                            taskStore.setCategory('');
                        }}
                        variant="outlined"
                        color="primary"
                        startIcon={<RestartAltIcon/>}
                        sx={{mt: 1, alignSelf: 'flex-end'}}
                    >
                        Reset filters
                    </Button>
                </Box>
            </Stack>
        </div>
    )
}