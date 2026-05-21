import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { openWhatsAppInquiry, PHONE_DISPLAY } from "@/lib/contact";
import {
  contactFormDefaultValues,
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-form-schema";

const inputClassName =
  "min-h-11 rounded-xl border-gray-200 bg-white text-[#0d1b4a] text-base focus-visible:ring-[#1a237e]/25 focus-visible:border-[#1a237e]/40";

const labelClassName =
  "text-[#0d1b4a] font-semibold text-base text-right block";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaultValues,
    mode: "onSubmit",
  });

  const onSubmit = (values: ContactFormValues) => {
    setIsSubmitting(true);
    openWhatsAppInquiry(values);
    setTimeout(() => setIsSubmitting(false), 800);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 py-20 bg-gradient-to-b from-[#f0f7ff] to-[#f5f2eb]"
      dir="rtl"
    >
      <div
        ref={ref}
        className={`max-w-lg mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-black text-[#0d1b4a] mb-4">
            צור קשר
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
            ייעוץ ראשוני ללא תשלום
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 border-t-4 border-t-[#D4A843] shadow-lg shadow-[#0d1b4a]/5 p-6 sm:p-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5"
              noValidate
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClassName}>
                      שם <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={inputClassName}
                        autoComplete="name"
                        placeholder="השם המלא שלך"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-right text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClassName}>
                      טלפון <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        dir="ltr"
                        className={`${inputClassName} text-left`}
                        autoComplete="tel"
                        placeholder="054-0000000"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-right text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClassName}>
                      מייל <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        dir="ltr"
                        className={`${inputClassName} text-left`}
                        autoComplete="email"
                        placeholder="name@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-right text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClassName}>
                      הודעה <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className={`${inputClassName} min-h-[120px] resize-y`}
                        placeholder="ספר לי בקצרה במה אוכל לעזור..."
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-right text-sm" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full min-h-12 bg-[#D4A843] hover:bg-[#b8912e] text-[#0d1b4a] font-bold text-lg rounded-xl shadow-md shadow-[#0d1b4a]/10 transition-all hover:shadow-lg hover:scale-[1.01] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                שלח
              </Button>

              <p className="text-center text-xs text-gray-500 leading-snug">
                הטופס יפתח שיחה ב-WhatsApp ({PHONE_DISPLAY})
              </p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
