import z from "zod";

export const searchFormSchema = z.object({
  query: z.string().optional(),
  locale: z.string().optional(),
});

export type SearchFormData = z.infer<typeof searchFormSchema>;
