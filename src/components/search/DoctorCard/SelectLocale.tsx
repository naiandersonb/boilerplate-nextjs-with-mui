import { Option } from "@/types/option";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";

interface SelectLocaleProps {
  localeList?: Option[];
  value?: string;
  onChange?: (value: string) => void;
}

export const SelectLocale = ({
  localeList = [],
  onChange,
  value = "",
}: SelectLocaleProps) => {
  return (
    <FormControl fullWidth>
      <Typography variant="caption" component="label" sx={{ mb: 1 }}>
        Locais de atendimento
      </Typography>
      <Select
        displayEmpty
        sx={{ borderRadius: 0 }}
        variant="outlined"
        onChange={(evt) => onChange?.(evt.target.value)}
        value={value}
        renderValue={(selected) => {
          if (!selected || selected.length === 0) {
            return (
              <Typography
                component="span"
                sx={{ color: "text.disabled", fontSize: "14px" }}
              >
                Selecione um local de atendimento
              </Typography>
            );
          }

          const selectedOption = localeList.find(
            (opt) => opt.value === selected,
          );
          return selectedOption?.label || selected;
        }}
      >
        {localeList.map((locale) => (
          <MenuItem
            key={locale.value}
            value={locale.value}
            sx={{ fontSize: "14px" }}
          >
            {locale.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
