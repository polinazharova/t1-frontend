import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '2px solid gray !important',
    },
    '& label.Mui-focused': {
        color: 'gray',
    },
}));
