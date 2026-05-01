import { Avatar, Box, Divider, Rating, Stack, Typography } from "@mui/material";

export const DoctorInfo = () => {
  return (
    <Stack direction="row" alignItems={{ md: "center" }} spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/41fd13/41fd1352ec48bb244ffaf7b16bdf3284_large.jpg"
        sx={{ width: { xs: 75, md: 120 }, height: { xs: 75, md: 120 } }}
      />
      <Box>
        <Typography
          fontSize={{ xs: "17px", md: "24px" }}
          fontWeight={500}
          variant="h5"
        >
          Dr. Lauro Rodolpho Soares Lopes
        </Typography>
        <Typography
          fontSize={{ xs: "12px", md: "16px" }}
          variant="body1"
          paddingY={1}
        >
          Dermatologista (Cirurgia dermatológica, Tratamentos estéticos faciais,
          Queda de cabelo, Câncer de pele)
        </Typography>

        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          direction="row"
          spacing={1}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: { xs: "10px", md: "14px" },
            }}
            variant="body2"
            color="primary"
          >
            CRM SP 2468
          </Typography>

          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: { xs: "10px", md: "14px" },
            }}
            variant="body2"
            color="primary"
          >
            RQE 35790
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <Rating
            sx={{ color: "secondary.main" }}
            name="read-only"
            value={4}
            size="small"
            readOnly
          />

          <Typography variant="caption">35 avaliações</Typography>
        </Stack>
      </Box>
    </Stack>
  );
};
