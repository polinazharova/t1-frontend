import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

interface Props {
    onClick: () => void;
}

export const CreateTaskButton = ({ onClick }: Props) => {
    return (
        <Button
            onClick={onClick}
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{
                textTransform: 'none',
                paddingX: 2,
                paddingY: 0.5,
                boxShadow: '3px 3px 1px rgba(25, 118, 210, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                    boxShadow: '4px 4px 3px rgba(25, 118, 210, 0.3)',
                    transform: 'scale(1.01)',
                },
            }}
        >
            CREATE TASK
        </Button>
    );
};
