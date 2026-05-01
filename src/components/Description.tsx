import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

interface DescriptionProps {
  text: string;
  minChars?: number;
}
export const Description: React.FC<DescriptionProps> = ({
  text,
  minChars = 150,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = text.length > minChars;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const paragraphs = text
    .split("\n")
    .filter((p) => p.trim() !== "")
    .slice(0, 4);

  return (
    <Box sx={{ mt: 4 }}>
      {paragraphs.map((paragraph, index) => (
        <Typography
          key={index}
          variant="body2"
          color="textSecondary"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: isLongText && !isExpanded ? 3 : "none",
            overflow: "hidden",
            mb: 1,
          }}
        >
          {paragraph}
        </Typography>
      ))}

      {isLongText && (
        <Button
          variant="text"
          size="small"
          onClick={toggleExpansion}
          endIcon={isExpanded ? <ExpandLess /> : <ExpandMore />}
          sx={{ mt: 1, textTransform: "none" }}
        >
          {isExpanded ? "Ver menos" : "Ler mais"}
        </Button>
      )}
    </Box>
  );
};
