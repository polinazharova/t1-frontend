import styles from './StatusFilter.module.css'
import {statusList} from "../../../../widgets/task-list/model/const/status";
import {StyledFormControl} from "../../../../shared/styled-form-control";
import {StyledInputLabel} from "../../../../shared/styled-input-label";
import {StyledSelect} from "../../../../shared/styled-select";
import {StyledMenuItem} from "../../../../shared/styled-menu-item";

interface Props {
    status: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
}

export const StatusFilter = ({status, setStatus} : Props) => {
    return (
        <StyledFormControl className={styles['status-filter']}>
            <StyledInputLabel>Status</StyledInputLabel>
            <StyledSelect
                value={status}
                onChange={(e) => setStatus(e.target.value as string)}
                label="Status"
            >
                <StyledMenuItem value="">All statuses</StyledMenuItem>
                {
                    statusList.map((item) => (
                        <StyledMenuItem key={item} value={item}>{item}</StyledMenuItem>
                    ))
                }
            </StyledSelect>
        </StyledFormControl>
    )
}