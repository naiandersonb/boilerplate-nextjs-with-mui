import { SearchFormData, searchFormSchema } from "@/schemas/search-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
export const useSearchForm = () => {
  const searchForm = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: "",
      locale: "",
    },
  });

  return searchForm;
};
