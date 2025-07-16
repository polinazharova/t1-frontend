import styles from "./TaskTags.module.css"
import {Tags} from "../../model/types/task";
import {Chip} from "@mui/material";

interface Props {
    tags: Tags;
}

type ColorType = "primary" | "secondary" | "default" | "error" | "info" | "success" | "warning";

const colors: Record<keyof Tags, ColorType> = {
    category : "default",
    status : "primary",
    priority : "secondary",
}

export const TaskTags = ({tags}: Props) => {
    return (
        <div className={styles.tags}>
            {
                Object.keys(tags).map((tagKey) => (
                    <Chip key={tagKey} label={tags[tagKey as keyof Tags]} color={colors[tagKey as keyof Tags]}></Chip>
                ))
            }
        </div>
    )
}