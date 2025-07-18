import styles from "./TaskTags.module.css"
import {Tags} from "../../model/types/task";
import {Chip} from "@mui/material";
import {
    BugReport as BugIcon,
    NewReleases as FeatureIcon,
    Description as DocumentationIcon,
    Build as RefactorIcon,
    Science as TestIcon,
    RadioButtonUnchecked as TodoIcon,
    HourglassBottom as InProgressIcon,
    CheckCircle as DoneIcon,
    ArrowDownward as LowIcon,
    HorizontalRule as MediumIcon,
    ArrowUpward as HighIcon
} from "@mui/icons-material";

interface Props {
    tags: Tags;
}

type ColorType = "primary" | "secondary" | "default" | "error" | "info" | "success" | "warning";

const colors: Record<keyof Tags, ColorType> = {
    category : "default",
    status : "primary",
    priority : "secondary",
}

const iconMapping : Record<keyof Tags, Record<string, JSX.Element>> = {
    category: {
        "Bug": <BugIcon fontSize="small" />,
        "Feature": <FeatureIcon fontSize="small" />,
        "Documentation": <DocumentationIcon fontSize="small" />,
        "Refactor": <RefactorIcon fontSize="small" />,
        "Test": <TestIcon fontSize="small" />,
    },
    status: {
        "To Do": <TodoIcon fontSize="small" />,
        "In Progress": <InProgressIcon fontSize="small" />,
        "Done": <DoneIcon fontSize="small" />,
    },
    priority: {
        "Low": <LowIcon fontSize="small" />,
        "Medium": <MediumIcon fontSize="small" />,
        "High": <HighIcon fontSize="small" />,
    }
};

export const TaskTags = ({tags}: Props) => {
    return (
        <div className={styles.tags}>
            {
                Object.keys(tags).map((tagKey) => (
                    <Chip
                        key={tagKey}
                        label={tags[tagKey as keyof Tags]}
                        color={colors[tagKey as keyof Tags]}
                        icon={iconMapping[tagKey as keyof Tags]?.[tags[tagKey as keyof Tags]] || undefined}
                    />
                ))
            }
        </div>
    )
}