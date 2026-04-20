import { Option } from "@/types/option";
import {
  Autocomplete,
  CircularProgress,
  debounce,
  TextField,
} from "@mui/material";
import { ReactNode, useMemo, useState } from "react";

interface SpecialtySearchProps {
  onValueChange: (value: string | null) => void;
  handleFetch?: (query: string) => Promise<Option[]>;
  placeholder?: string;
  startAdornment?: ReactNode;
}

export const AsyncAutocompleteField: React.FC<SpecialtySearchProps> = ({
  onValueChange,
  handleFetch,
  placeholder,
  startAdornment,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchApi = useMemo(
    () =>
      debounce((query: string) => {
        handleFetch?.(query)
          .then((res) => setOptions(res))
          .finally(() => setLoading(false));
      }, 400),
    [handleFetch],
  );

  return (
    <Autocomplete
      freeSolo
      fullWidth
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      options={options}
      loading={loading}
      onInputChange={(_, newValue, reason) => {
        onValueChange(newValue);
        if (reason === "input" && newValue.length > 2) {
          console.log({ newValue });
          setLoading(true);
          fetchApi(newValue);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder={placeholder}
          slotProps={{
            input: {
              ...params.InputProps,
              startAdornment,
              endAdornment: (
                <>
                  {loading && <CircularProgress color="inherit" size={20} />}
                  {params.InputProps.endAdornment}
                </>
              ),
              sx: { borderRadius: 0 },
            },
          }}
        />
      )}
    />
  );
};
