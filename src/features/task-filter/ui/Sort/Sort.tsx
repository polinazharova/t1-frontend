import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const SortButton = () => {
    const [isDescending, setIsDescending] = useState(true);

    const handleSort = () => {
        setIsDescending(!isDescending);
    };

    return (
        <Tooltip title={`Sort by date (${isDescending ? 'newest first' : 'oldest first'})`}>
            <IconButton sx={{ borderRadius: "50%", width: '10%' }} onClick={handleSort} color="primary">
                {isDescending ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
            </IconButton>
        </Tooltip>
    );
};
