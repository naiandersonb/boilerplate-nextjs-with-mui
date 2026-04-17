import { Option } from "@/types/option";
import { Search } from "@mui/icons-material";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";

interface SpecialtiesFieldProps {
  value?: string;
  onChange?: (value: Option | string) => void;
}

export const SpecialtiesField: React.FC<SpecialtiesFieldProps> = ({
  onChange,
  value = null,
}) => {
  return (
    <Autocomplete
      fullWidth
      options={[]}
      value={value}
      onChange={(_, newValue: Option | string | null) => {
        onChange?.(newValue as Option | string);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          size="medium"
          placeholder="Especialidade ou médico"
          variant="outlined"
          slotProps={{
            input: {
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              sx: { borderRadius: 0 },
            },
          }}
        />
      )}
    />
  );
};
