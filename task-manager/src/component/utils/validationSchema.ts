import { z } from "zod";

export const validationSchema = z.object({
  title: z
    .string()
    .nonempty("タイトルは必須です")
    .max(100, "100文字以内で入力してください"),
  name: z.string().nonempty("名前は必須です"),
  date: z.string().nonempty("日付は必須です"),
  time: z.string().nonempty("時間は必須です"),
  other: z.string(),
});
