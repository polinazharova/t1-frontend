import styles from './PriorityFilter.module.css'
import {priorityList} from "../../../../widgets/task-list/model/const/priority";
import {StyledFormControl} from "../../../../shared/styled-form-control";
import {StyledInputLabel} from "../../../../shared/styled-input-label";
import {StyledSelect} from "../../../../shared/styled-select";
import {StyledMenuItem} from "../../../../shared/styled-menu-item";

interface Props {
    priority: string;
    setPriority: (status: string) => void;
}

export const PriorityFilter = ({priority, setPriority} : Props) => {
    return (
        <StyledFormControl className={styles['priority-filter']}>
            <StyledInputLabel>Priority</StyledInputLabel>
            <StyledSelect
                value={priority}
                onChange={(e) => setPriority(e.target.value as string)}
                label="Priority"
            >
                <StyledMenuItem value="">All priorities</StyledMenuItem>
                {
                    priorityList.map((item) => (
                        <StyledMenuItem key={item} value={item}>{item}</StyledMenuItem>
                    ))
                }
            </StyledSelect>
        </StyledFormControl>
    )
}