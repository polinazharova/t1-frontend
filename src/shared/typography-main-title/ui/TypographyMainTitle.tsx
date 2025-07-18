import {Typography} from "@mui/material";

interface Props {
    children: React.ReactNode;
}

export const TypographyMainTitle = ({children} : Props) => {
    return (
        <Typography variant="h5" sx={{ mt: 2, mb: 2, textAlign: "center", fontWeight: "100" }}>
            {children}
        </Typography>
    )
}