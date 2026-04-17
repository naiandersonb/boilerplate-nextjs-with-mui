import { Option } from "@/types/option";
import { PlaceType } from "@/types/place-type";
import { debounce } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

export const useSearchLocale = () => {
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

  return { options, inputValue, setInputValue };
};
