import styles from "./StatusFilter.module.css";
import { statusList } from "@widgets/task-list/model/const/status";
import { StyledFormControl } from "@shared/styled-form-control";
import { StyledInputLabel } from "@shared/styled-input-label";
import { StyledSelect } from "@shared/styled-select";
import { StyledMenuItem } from "@shared/styled-menu-item";
import { taskStore } from "@entities/task";
import { observer } from "mobx-react-lite";

export const StatusFilter = observer(() => {
  return (
    <StyledFormControl className={styles["status-filter"]}>
      <StyledInputLabel>Status</StyledInputLabel>
      <StyledSelect
        value={taskStore.status}
        onChange={(e) => taskStore.setStatus(e.target.value as string)}
        label="Status"
      >
        <StyledMenuItem value="">All statuses</StyledMenuItem>
        {statusList.map((item) => (
          <StyledMenuItem key={item} value={item}>
            {item}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
});
