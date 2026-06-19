"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, MapPin, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FadeUp } from "@/components/motion";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Ad en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi girin"),
  subject: z.string().min(3, "Konu en az 3 karakter olmalıdır"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <FadeUp>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Ad Soyad</Label>
            <Input
              id="name"
              {...register("name")}
              className="mt-1.5"
              placeholder="Adınız Soyadınız"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">E-posta</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="mt-1.5"
              placeholder="ornek@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="subject">Konu</Label>
          <Input
            id="subject"
            {...register("subject")}
            className="mt-1.5"
            placeholder="Mesajınızın konusu"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="message">Mesaj</Label>
          <Textarea
            id="message"
            {...register("message")}
            className="mt-1.5"
            placeholder="Mesajınızı buraya yazın..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          <Send className="h-4 w-4" />
          {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
        </Button>
        {submitted && (
          <p className="text-sm font-medium text-green-600">
            Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
          </p>
        )}
      </form>
    </FadeUp>
  );
}

export function ContactInfo() {
  const info = [
    {
      icon: MapPin,
      title: "Adres",
      content: "Maslak Mahallesi, Büyükdere Caddesi No: 123\nSarıyer, İstanbul 34398",
    },
    {
      icon: Mail,
      title: "E-posta",
      content: "info@saathesaplama.com",
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+90 (212) 555 00 00",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00",
    },
  ];

  return (
    <div className="space-y-6">
      {info.map((item) => (
        <FadeUp key={item.title}>
          <div className="flex gap-4 rounded-2xl border border-border/60 bg-white p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary/10">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 whitespace-pre-line text-sm text-muted">
                {item.content}
              </p>
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}

export function MapPlaceholder() {
  return (
    <FadeUp>
      <div className="flex h-64 items-center justify-center rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 to-secondary/5 md:h-80">
        <div className="text-center">
          <MapPin className="mx-auto h-10 w-10 text-primary" />
          <p className="mt-3 font-medium text-foreground">İstanbul, Türkiye</p>
          <p className="mt-1 text-sm text-muted">Harita yakında eklenecek</p>
        </div>
      </div>
    </FadeUp>
  );
}
