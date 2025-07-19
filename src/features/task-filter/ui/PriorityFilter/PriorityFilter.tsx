import styles from "./PriorityFilter.module.css";
import { priorityList } from "@widgets/task-list/model/const/priority";
import { StyledFormControl } from "@shared/styled-form-control";
import { StyledInputLabel } from "@shared/styled-input-label";
import { StyledSelect } from "@shared/styled-select";
import { StyledMenuItem } from "@shared/styled-menu-item";
import { taskStore } from "@entities/task";
import { observer } from "mobx-react-lite";

export const PriorityFilter = observer(() => {
  return (
    <StyledFormControl className={styles["priority-filter"]}>
      <StyledInputLabel>Priority</StyledInputLabel>
      <StyledSelect
        value={taskStore.priority}
        onChange={(e) => taskStore.setPriority(e.target.value as string)}
        label="Priority"
      >
        <StyledMenuItem value="">All priorities</StyledMenuItem>
        {priorityList.map((item) => (
          <StyledMenuItem key={item} value={item}>
            {item}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
});
