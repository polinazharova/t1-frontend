import styles from './TaskItem.module.css'
import {Task} from '@entities/task'
import {TaskTags} from "../TaskTags/TaskTags.tsx";
import {Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from "react-router-dom";

interface Props {
    task: Task;
}

export const TaskItem = ({task}: Props) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/task/${task.id}`);
    }
    return (
        <Card className={styles.task} sx={{ height: 250, width: "100%",  border: '1px solid gray', boxShadow: '3px 3px 1px rgba(0, 0, 0, 0.1)'}}>
            <CardHeader
                title={task.title}
                subheader={`ID: ${task.id}`}
            />
            <CardContent className={styles["card-content"]}>
                <Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
                    {task.description}
                </Typography>
                <TaskTags tags={task.tags}/>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end', pt: 0 }}>
                <Button
                    startIcon={<EditIcon />}
                    size="small"
                    onClick={onClick}
                    sx={{color : "black"}}
                >
                    Edit
                </Button>
            </CardActions>
        </Card>
    )
}