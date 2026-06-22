import Link from "next/link";
import { Button } from "@/components/ui/button";
import { capitalizeHeadingWords } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-black text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-foreground">
        {capitalizeHeadingWords("Sayfa Bulunamadı")}
      </h2>
      <p className="mt-2 max-w-md text-muted">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Ana Sayfaya Dön</Link>
      </Button>
    </div>
  );
}
