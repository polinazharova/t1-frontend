import {taskStore} from "@entities/task";
import {observer} from "mobx-react-lite";
import {StyledTextField} from "@shared/styled-textfield";
import {Box, InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const TaskSearch = observer(() => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledTextField
            size="small"
            label="Search by title or description"
            variant="outlined"
            value={taskStore.search}
            onChange={(e) => {taskStore.setSearch(e.target.value)}}
            sx={{ mb: 0.5, width: "75%" }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon color="action" />
                    </InputAdornment>
                ),
            }}
        />
        </Box>
    )
})