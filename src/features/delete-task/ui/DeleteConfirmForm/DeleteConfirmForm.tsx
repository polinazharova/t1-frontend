import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Box,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteConfirmForm = ({ open, onClose, onConfirm }: Props) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <WarningAmberIcon sx={{ color: "error.main", fontSize: 28 }} />
          <Typography variant="h6" color="error.main" component="span">
            Confirm Deletion
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ fontSize: 16 }}>
          Are you sure you want to delete this task? This action cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} variant="outlined" color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error" variant="outlined" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
