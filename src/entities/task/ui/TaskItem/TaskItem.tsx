import styles from './TaskItem.module.css'
import {Task} from '@entities/task'
import {TaskTags} from "../TaskTags/TaskTags.tsx";
import {Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {useLocation, useNavigate} from "react-router-dom";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import UpdateIcon from '@mui/icons-material/Update';

interface Props {
    task: Task;
    actions?: React.ReactNode;
}

export const TaskItem = ({task, actions}: Props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const onClick = () => {
        navigate(`/task/${task.id}`);
    }

    const onClickEdit = (event) => {
        event.stopPropagation();
        navigate(`/update/${task.id}`, { state: { background: location } });
    };

    const normalizeText = (text: string | undefined) => {
        if (text && text?.length > 35) {
            return text.slice(0, 35) + '...';
        }
        return text;
    }

    return (
        <Card onClick={onClick} className={styles.task} sx={{
            height: 320,
            width: "100%",
            border: '1px solid gray',
            boxShadow: '3px 3px 1px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
                cursor: 'pointer',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderColor: 'primary.main'
            }}}>
            <CardHeader
                title={normalizeText(task.title)}
                subheader={`ID: ${task.id}`}
                sx={{alignSelf: 'flex-start'}}
            />
            <CardContent className={styles["card-content"]}>
                <Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
                    {normalizeText(task.description)}
                </Typography>
                <TaskTags tags={task.tags}/>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end', pt: 0 }}>
                <Button
                    startIcon={<EditIcon />}
                    size="small"
                    sx={{color : "black"}}
                    onClick={onClickEdit}
                >
                    Edit
                </Button>
                {actions}
            </CardActions>
            <Divider sx={{ width: '75%', borderColor: 'lightgray', borderWidth: 1, my: 1.5 }} />
            <Box sx={{
                display: 'flex',
                gap: 1,
                px: 2,
                pb: 1
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AccessTimeIcon fontSize="small" color="disabled" />
                    <Typography variant="caption" color="text.secondary" sx={{fontSize: '10px'}}>
                        Created: {task.createdAt}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <UpdateIcon fontSize="small" color="disabled" />
                    <Typography variant="caption" color="text.secondary" sx={{fontSize: '10px'}}>
                        Updated: {task.updatedAt}
                    </Typography>
                </Box>
            </Box>
        </Card>
    )
}