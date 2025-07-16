import {Typography} from "@mui/material";

interface Props {
    children: React.ReactNode;
}

export const TypographyMainTitle = ({children} : Props) => {
    return (
        <Typography variant="h5" sx={{ mt: 5, textAlign: "center", fontWeight: "100" }}>
            {children}
        </Typography>
    )
}