import { LocationOnOutlined } from "@mui/icons-material";
import { GlobalStyles, InputAdornment, TextField } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import { useRef, useState } from "react";

export interface PlaceType {
  placeId: string;
  name: string;
}

interface SearchLocaleFieldProps {
  inputValue?: string;
  setInputValue: (value: string) => void;
}

export const SearchLocaleField: React.FC<SearchLocaleFieldProps> = ({
  setInputValue,
}) => {
  const [autocomplete, setAutocomplete] = useState<PlaceType | null>(null);
  const inputEl = useRef<HTMLInputElement>(null);

  const onLoad = (autocompleteObj: PlaceType) => {
    setAutocomplete(autocompleteObj);
  };

  const handlePlaceChanged = () => {
    if (autocomplete) setInputValue(autocomplete.name);
  };

  return (
    <>
      <GlobalStyles
        styles={{
          ".pac-container": {
            borderRadius: 0,
            marginTop: "4px",
            marginLeft: "-44px",
            padding: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            border: "none",
            fontFamily: "inherit",
            minWidth: "550px",
            zIndex: 9999,
          },
          "@media (max-width: 900px)": {
            ".pac-container": {
              minWidth: "400px",
              marginLeft: "0px",
            },
          },
          "@media (max-width: 600px)": {
            ".pac-container": {
              minWidth: "100% !important",
              width: "100%",
              marginLeft: "0px",
              left: "0px !important",
              borderRadius: "0px",
            },
            ".pac-item": {
              padding: "12px 16px",
            },
          },
          ".pac-item": {
            padding: "16px",
            fontSize: "14px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          },
          ".pac-item-query": {
            fontSize: "16px",
            paddingRight: "8px",
            color: "#333",
          },
          ".pac-icon": {
            marginRight: "10px",
          },
        }}
      />

      <Autocomplete
        options={{
          types: ["(cities)"],
          componentRestrictions: { country: "br" },
        }}
        onLoad={(data) => {
          console.log({ data });
          const placeData = data.getPlace();
          onLoad({
            name: placeData?.name || "",
            placeId: placeData?.place_id || "",
          });
        }}
        onPlaceChanged={() => {
          console.log({ autocomplete });
          handlePlaceChanged();
        }}
        fields={["place_id", "name"]}
      >
        <TextField
          inputRef={inputEl}
          type="text"
          fullWidth
          placeholder="Cidade ou região"
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnOutlined color="primary" />
                </InputAdornment>
              ),

              sx: { borderRadius: 0 },
            },
          }}
        />
      </Autocomplete>
    </>
  );
};
