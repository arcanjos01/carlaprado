import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carlaprado.pages.dev/"),
  title: "Carla Prado | Desenvolvimento e Aprendizagem Infantil em Criciúma",
  description: "Acompanhamento individualizado para crianças com desafios no desenvolvimento e na aprendizagem, conectando criança, família e escola em Criciúma-SC.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: { title: "Carla Prado | Desenvolvimento e Aprendizagem Infantil", description: "Desenvolvimento e aprendizagem com um olhar que conecta criança, família e escola.", url: "https://carlaprado.pages.dev/", locale: "pt_BR", type: "website", images: [{ url: "/carla-prado-profissional-1122.jpg", width: 1122, height: 1402, alt: "Carla Prado, pedagoga e especialista em desenvolvimento e aprendizagem infantil", type: "image/jpeg" }] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Carla Prado", description: "Acompanhamento individualizado relacionado ao desenvolvimento e à aprendizagem infantil.", url: "https://carlaprado.pages.dev/", telephone: "+55 48 99916-3731", email: "carlajplgomes@gmail.com", serviceType: "Desenvolvimento e aprendizagem infantil", areaServed: { "@type": "City", name: "Criciúma", address: { "@type": "PostalAddress", addressRegion: "SC", addressCountry: "BR" } }, audience: { "@type": "PeopleAudience", audienceType: "Pais e responsáveis" } };
  return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />{children}</body></html>;
}
