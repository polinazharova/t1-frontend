import styles from './TaskFilter.module.css'
import {PriorityFilter} from "../PriorityFilter/PriorityFilter";
import {StatusFilter} from "../StatusFilter/StatusFilter";
import {CategoryFilter} from "../CategoryFilter/CategoryFilter";
import {Box, Button, Stack} from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {taskStore} from "../../../../entities/task";

export const TaskFilter = () => {
    const {priority, setPriority, status, setStatus, category, setCategory} = taskStore;

    return (
        <div className={styles["task-filter"]}>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                sx={{ mt: 2 }}
            >
                <StatusFilter status={status} setStatus={setStatus}/>
                <PriorityFilter priority={priority} setPriority={setPriority}/>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%'  }}>
                    <CategoryFilter category={category} setCategory={setCategory} />
                    <Button
                        onClick={() => {
                            setStatus('');
                            setPriority('');
                            setCategory('');
                        }}
                        variant="outlined"
                        color="primary"
                        startIcon={<RestartAltIcon />}
                        sx={{ mt: 1, alignSelf: 'flex-end' }}
                    >
                        Reset filters
                    </Button>
                </Box>
            </Stack>
        </div>
    )
}