import { MouseEvent, useId, useState } from "react";

export const useAnchor = <T = HTMLButtonElement>(
  idPrefix: string = "mui-anchor",
) => {
  const [anchorEl, setAnchorEl] = useState<T | null>(null);
  const reactId = useId();

  const handleOpen = (event: MouseEvent<T>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);
  const id = isOpen ? `${idPrefix}-${reactId}` : undefined;

  return { handleOpen, anchorEl, handleClose, isOpen, id };
};
