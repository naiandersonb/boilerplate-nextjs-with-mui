"use client";

import {
  AccessTimeOutlined,
  CalendarTodayOutlined,
  VerifiedOutlined,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  keyframes,
} from "@mui/material";

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

export const MarqueeList = () => {
  const list = [
    {
      text: "Horários disponíveis em tempo real",
      icon: (
        <AccessTimeOutlined sx={{ width: 24, height: 24 }} color="primary" />
      ),
    },
    {
      text: "Agendamento rápido e online",
      icon: (
        <CalendarTodayOutlined sx={{ width: 24, height: 24 }} color="primary" />
      ),
    },
    {
      text: "Pagamento 100% seguro",
      icon: (
        <VerifiedUserOutlined sx={{ width: 24, height: 24 }} color="primary" />
      ),
    },
    {
      text: "Especialistas verificados",
      icon: <VerifiedOutlined sx={{ width: 24, height: 24 }} color="primary" />,
    },
  ];

  const marqueeItems = [...list, ...list];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          overflow: "hidden",
          width: "100%",
          paddingY: 6,
          position: "relative",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <Stack
          direction="row"
          spacing={8}
          alignItems="center"
          divider={<Divider orientation="vertical" flexItem />}
          sx={{
            width: "max-content",
            animation: `${scroll} 50s linear infinite`,
            willChange: "transform",
            "&:hover": { animationPlayState: "paused" },
          }}
        >
          {marqueeItems.map((item, index) => (
            <Stack
              key={index}
              direction="row"
              gap={2}
              alignItems="center"
              sx={{ whiteSpace: "nowrap" }}
            >
              {item.icon}
              <Typography
                variant="h5"
                color="textSecondary"
                sx={{
                  lineHeight: 1.2,
                  fontSize: { xs: "16px", md: "24px" },
                }}
              >
                {item.text}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};
