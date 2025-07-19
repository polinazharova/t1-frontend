import { Modal, Box } from "@mui/material";
import { TaskForm } from "../TaskForm/TaskForm";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ModalTaskForm = ({ open, onClose }: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: 600,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <TaskForm onClickCancel={onClose} />
      </Box>
    </Modal>
  );
};
