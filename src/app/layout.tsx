import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Santo Sports | Calzado Deportivo en Santo Domingo, Ecuador – La Tierrita",
    template: "%s | Santo Sports",
  },
  description:
    "Santo Sports – Tu tienda de calzado deportivo en Santo Domingo de los Tsáchilas, Ecuador. Nike, Adidas, New Balance, Skechers y más. Visítanos en la tierrita. ¡Tú eres más!",
  keywords: [
    "Santo Sports",
    "santosports",
    "santo sports",
    "La tierrita",
    "la tierrita",
    "Santo Domingo",
    "Santo Domingo de los Tsáchilas",
    "calzado deportivo Santo Domingo",
    "zapatos deportivos Ecuador",
    "tienda de zapatos Santo Domingo",
    "Nike Santo Domingo",
    "Adidas Santo Domingo",
    "New Balance Ecuador",
    "Skechers Ecuador",
    "zapatillas deportivas",
    "calzado basketball",
    "zapatos fútbol Ecuador",
    "tenis deportivos Santo Domingo",
  ],
  authors: [{ name: "Santo Sports" }],
  creator: "Santo Sports",
  publisher: "Santo Sports",
  icons: {
    icon: "/logo1.png",
    apple: "/logo1.png",
  },
  metadataBase: new URL("https://santosports.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://santosports.com",
    siteName: "Santo Sports",
    title: "Santo Sports | Calzado Deportivo en Santo Domingo – La Tierrita",
    description:
      "Tu tienda de calzado deportivo en Santo Domingo, Ecuador. Nike, Adidas, New Balance, Skechers y más marcas. Visítanos en la tierrita. ¡Tú eres más!",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Santo Sports – Calzado Deportivo en Santo Domingo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santo Sports | Calzado Deportivo en Santo Domingo",
    description:
      "Tu tienda de calzado deportivo en Santo Domingo, Ecuador. Nike, Adidas, New Balance y más. ¡Tú eres más!",
    images: ["/logo1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Agrega tu código de Google Search Console aquí cuando lo tengas:
    // google: "tu-codigo-de-verificacion",
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Santo Sports",
  alternateName: ["SantoSports", "Santo Sports Ecuador", "La Tierrita Santo Sports"],
  description:
    "Tienda de calzado deportivo en Santo Domingo de los Tsáchilas, Ecuador. Marcas como Nike, Adidas, New Balance, Skechers y más.",
  url: "https://santosports.com",
  logo: "https://santosports.com/logo1.png",
  image: "https://santosports.com/logo1.png",
  telephone: "+593963768074",
  email: "santo_sports@hotmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Quito y Ambato",
    addressLocality: "Santo Domingo",
    addressRegion: "Santo Domingo de los Tsáchilas",
    addressCountry: "EC",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -0.2555668,
    longitude: -79.1745833,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/share/18TsbZ433v/",
    "https://www.instagram.com/santosports2",
    "https://www.tiktok.com/@santo.sports",
  ],
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Transfer",
  areaServed: {
    "@type": "City",
    name: "Santo Domingo de los Tsáchilas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-[#050505]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
