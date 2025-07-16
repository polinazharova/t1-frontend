import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';

export const StyledSelect = styled(Select)(() => ({
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '2px solid gray',
    },
    '& .MuiOutlinedInput-input': {
        padding: '10px',
        textAlign: 'center',
    },
}));
