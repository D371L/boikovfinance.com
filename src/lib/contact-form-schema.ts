import { z } from "zod";

const phoneRegex = /^[\d\s\-+()]{9,20}$/;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "נא להזין שם (לפחות 2 תווים)" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "נא להזין מספר טלפון" })
    .regex(phoneRegex, { message: "מספר טלפון לא תקין" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "נא להזין כתובת מייל" })
    .email({ message: "כתובת מייל לא תקינה" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "נא לכתוב הודעה (לפחות 10 תווים)" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaultValues: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};
