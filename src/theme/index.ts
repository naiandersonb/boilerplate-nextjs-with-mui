"use client";

import { createTheme } from "@mui/material/styles";

import palette from "./palette";

const baseTheme = createTheme({
  palette,
});

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-outfit)",
  },
  palette,
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 0,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === "medium" && {
            "& .MuiChip-label": {
              padding: "6px 10px 8px",
            },
          }),
        }),
      },
    },

    MuiTableContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: "1px solid",
          borderColor: theme.palette.divider,
          borderRadius: 0,
          boxShadow: "none",
          [theme.breakpoints.down(1260)]: {
            boxShadow: "inset -10px 0px 10px rgba(0, 0, 0, 0.05)",
          },
        }),
      },
    },
    MuiMenu: {
      defaultProps: {
        PaperProps: {
          square: true,
          elevation: 2,
        },
      },
      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 0,
          border: "1px solid",
          borderColor: baseTheme.palette.divider,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "standard",
        fullWidth: true,
        size: "medium",
        slotProps: {
          inputLabel: {
            shrink: true,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0px !important",
          textTransform: "none",
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
        },
        outlined: {
          color: baseTheme.palette.primary.main,
          border: `1px solid ${baseTheme.palette.grey[100]}`,
        },
        containedError: {
          color: baseTheme.palette.error.main,
        },
      },
    },
  },
});

export default theme;
