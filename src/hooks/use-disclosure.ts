import { useState } from "react";

interface Params {
  defaultValue?: boolean;
}

export const useDisclosure = ({ defaultValue = false }: Params = {}) => {
  const [isOpen, setIsOpen] = useState(defaultValue);

  return {
    onToggle: () => setIsOpen((prev) => !prev),
    onClose: () => setIsOpen(false),
    onOpen: () => setIsOpen(true),
    isOpen,
  };
};

export type UseDisclosureProps = ReturnType<typeof useDisclosure>;
