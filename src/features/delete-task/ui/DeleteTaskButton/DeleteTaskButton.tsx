import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface Props {
  taskId: number | string;
  setDialogOpen: (modalOpen: boolean) => void;
  setDeletingTaskId: Dispatch<SetStateAction<number | string | null>>;
}

export const DeleteTaskButton = ({
  taskId,
  setDialogOpen,
  setDeletingTaskId,
}: Props) => {
  const onClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDeletingTaskId(taskId);
    setDialogOpen(true);
  };

  return (
    <Button
      onClick={onClick}
      variant="text"
      size="small"
      color="error"
      startIcon={<DeleteIcon />}
      sx={{
        textTransform: "none",
        fontWeight: 500,

        px: 2,
        py: 0.5,
        "&:hover": {
          backgroundColor: "rgba(244, 67, 54, 0.1)",
        },
      }}
    >
      Delete
    </Button>
  );
};
