import { Option } from "@/types/option";
import { LocationOnOutlined } from "@mui/icons-material";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";

interface LocaleFieldProps {
  value?: string;
  onChange?: (value: Option | string) => void;
}

export const LocaleField: React.FC<LocaleFieldProps> = ({
  onChange,
  value,
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
          placeholder="Cidade ou região"
          variant="outlined"
          slotProps={{
            input: {
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnOutlined />
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
