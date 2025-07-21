import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

type Color = "neutral" | "error";

const COLORS: Record<Color, string> = {
  neutral: "black",
  error: "#f44336",
};

interface Props {
  children: React.ReactNode;
  color?: Color;
}

export const InfoMessage = ({ children, color = "neutral" }: Props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      py: 6,
      textAlign: "center",
      color: COLORS[color],
    }}
  >
    <InfoOutlinedIcon sx={{ fontSize: 48, mb: 1 }} color="inherit" />
    <Typography variant="h6">{children}</Typography>
  </Box>
);
