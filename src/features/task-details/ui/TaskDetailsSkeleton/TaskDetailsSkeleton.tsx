import { Box, Skeleton, Typography, Stack } from "@mui/material";

export const TaskDetailsSkeleton = () => {
  return (
    <Box sx={{ mt: 2, px: 4 }}>
      <Stack spacing={3}>
        <Skeleton sx={{ mb: 3 }} variant="rectangular" height={56} />

        <Skeleton sx={{ mb: 3 }} variant="rectangular" height={120} />

        <Typography
          sx={{ mb: 2, textAlign: "center" }}
          variant="subtitle1"
          gutterBottom
        >
          <Skeleton width={100} sx={{ mx: "auto" }} />
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mb: 3,
            flexWrap: "wrap",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              sx={{ minWidth: 300, minHeight: 43 }}
            />
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Skeleton
            variant="rectangular"
            sx={{ minWidth: 86, minHeight: 43 }}
          />
          <Skeleton
            variant="rectangular"
            sx={{ minWidth: 86, minHeight: 43 }}
          />
        </Box>
      </Stack>
    </Box>
  );
};
