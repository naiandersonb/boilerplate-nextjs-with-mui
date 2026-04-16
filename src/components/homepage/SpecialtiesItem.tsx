import { ArrowOutward } from "@mui/icons-material";
import { alpha, Link } from "@mui/material";

export const SpecialtiesItem: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Link
      target="_blank"
      href="https://www.youtube.com/watch?v=vJpagbZ-IE0"
      fontSize={{ xs: "14px", md: "20px" }}
      sx={({ palette }) => ({
        borderRadius: "50px",
        border: "1px solid",
        borderColor: palette.primary.main,
        backgroundColor: alpha(palette.primary.main, 0.05),
        paddingY: 1,
        paddingX: 3,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: { xs: "underline", md: "none" },
        color: palette.primary.main,
        transition: "all 0.3s ease-in-out",
        position: "relative",
        minWidth: "160px",

        "& .MuiSvgIcon-root": {
          fontSize: "1.2rem",
          transition: "all 0.3s ease-in-out",
          position: { xs: "static", md: "absolute" },
          right: { md: "15px" },
          ml: { xs: 1, md: 0 },
          opacity: { xs: 1, md: 0 },
          transform: { xs: "none", md: "translateX(-10px)" },
        },

        "&:hover": {
          textDecoration: "underline",
          paddingRight: { md: "40px" },
          paddingLeft: { md: "20px" },
          "& .MuiSvgIcon-root": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      })}
    >
      <span>{content}</span>
      <ArrowOutward />
    </Link>
  );
};
