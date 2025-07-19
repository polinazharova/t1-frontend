import { styled } from "@mui/material/styles";
import { MenuItem } from "@mui/material";

export const StyledMenuItem = styled(MenuItem)(() => ({
  "&.Mui-selected": {
    backgroundColor: "rgba(0, 0, 0, 0.1) !important",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
}));
