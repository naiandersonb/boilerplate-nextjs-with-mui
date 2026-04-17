import { useSearchLocale } from "@/hooks/use-search-locale";
import { Option } from "@/types/option";
import { LocationOnOutlined } from "@mui/icons-material";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";

interface LocaleFieldProps {
  value?: Option;
  onChange?: (value: Option | string) => void;
  noOptionsText?: string;
  placeholder?: string;
}

export const LocaleField: React.FC<LocaleFieldProps> = ({
  onChange,
  noOptionsText = "Digite pelo menos 3 caracteres para realizar a busca",
  placeholder = "Cidade ou região",
  value,
}) => {
  const { options, setInputValue } = useSearchLocale();

  return (
    <Autocomplete
      fullWidth
      options={options}
      value={value as Option}
      filterOptions={(x) => x}
      includeInputInList
      noOptionsText={noOptionsText}
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      onChange={(_, newValue: Option | string | null) => {
        console.log({ newValue });
        onChange?.(newValue as Option | string);
      }}
      isOptionEqualToValue={(option, val) => option === val}
      renderInput={(params) => (
        <TextField
          {...params}
          size="medium"
          placeholder={placeholder}
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
