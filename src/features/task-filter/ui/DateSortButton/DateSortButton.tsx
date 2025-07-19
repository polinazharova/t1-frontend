import { IconButton, Tooltip } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {taskStore} from "@entities/task";
import {observer} from "mobx-react-lite";

export const DateSortButton = observer(() => {
    const isDescending = taskStore.isDescending;

    const handleSort = () => {
        taskStore.setIsDescending(!isDescending);
    };

    return (
        <Tooltip title={`Sort by date (${isDescending ? 'newest first' : 'oldest first'})`}>
            <IconButton sx={{ borderRadius: "50%", width: '10%' }} onClick={handleSort} color="primary">
                {isDescending ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
            </IconButton>
        </Tooltip>
    );
});
