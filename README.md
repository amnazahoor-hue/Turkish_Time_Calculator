# Saat Hesaplama

Türkiye'nin en gelişmiş online saat hesaplama platformu. Premium SaaS kalitesinde Next.js 15 uygulaması.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**
- **Framer Motion**
- **React Hook Form + Zod**
- **next-seo** (Metadata API + JSON-LD)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Ana sayfa |
| `/saat-hesaplama` | Genel saat hesaplama |
| `/saat-farki-hesaplama` | Saat farkı hesaplama |
| `/saat-ekleme` | Tarihe saat ekleme |
| `/saat-cikarma` | Tarihten saat çıkarma |
| `/calisma-saati-hesaplama` | Çalışma süresi hesaplama |
| `/hakkimizda` | Hakkımızda |
| `/iletisim` | İletişim |
| `/gizlilik-politikasi` | Gizlilik politikası |
| `/kullanim-kosullari` | Kullanım koşulları |
| `/cerez-politikasi` | Çerez politikası |
| `/sorumluluk-reddi` | Sorumluluk reddi |

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # App Router pages
├── components/
│   ├── calculator/   # Calculator components
│   ├── contact/      # Contact form
│   ├── home/         # Homepage sections
│   ├── layout/       # Header, Footer
│   ├── legal/        # Legal page layout
│   ├── motion/       # Framer Motion wrappers
│   ├── seo/          # Schema markup
│   └── ui/           # Shadcn UI components
├── lib/              # Utils, SEO, calculator logic
└── types/            # TypeScript types
```

## SEO

- Metadata API (Open Graph, Twitter Cards, Canonical URLs)
- JSON-LD Schema (Organization, WebSite, FAQ, Breadcrumb, SoftwareApplication)
- Sitemap (`/sitemap.xml`)
- Robots (`/robots.txt`)

## License

Private — All rights reserved.
