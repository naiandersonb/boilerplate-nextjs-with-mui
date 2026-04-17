import { Option } from "@/types/option";
import { LocationOnOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  debounce,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";

interface LocaleFieldProps {
  value?: Option;
  onChange?: (value: Option | string) => void;
}

interface PlaceType {
  description: string;
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

export const LocaleField: React.FC<LocaleFieldProps> = ({
  onChange,
  value,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<Option[]>([]);

  const autocompleteService = useMemo(
    () =>
      typeof window !== "undefined" && window.google
        ? new google.maps.places.AutocompleteService()
        : null,
    [],
  );

  const fetchPredictions = useMemo(
    () =>
      debounce((input: string, callback: (results: PlaceType[]) => void) => {
        if (!autocompleteService || input.length < 3) {
          callback([]);
          return;
        }

        autocompleteService.getPlacePredictions(
          {
            input,
            types: ["(cities)"],
            componentRestrictions: { country: "br" },
          },
          (predictions) => callback(predictions || []),
        );
      }, 400),
    [autocompleteService],
  );

  useEffect(() => {
    fetchPredictions(inputValue, (results) => {
      const formattedOptions = results.map((place) => {
        const city = place.structured_formatting.main_text;
        const state = place.structured_formatting.secondary_text.replace(
          ", Brasil",
          "",
        );

        return {
          label: `${city}, ${state}`,
          value: place.place_id,
        };
      });
      setOptions(formattedOptions);
    });
  }, [inputValue, fetchPredictions]);

  return (
    <Autocomplete
      fullWidth
      options={options}
      value={value as Option}
      filterOptions={(x) => x}
      includeInputInList
      noOptionsText="Digite pelo menos 3 caracteres para realizar a busca"
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
