import type { Metadata } from "next";
import "./globals.css";
import Layout from './components/layout/Layout';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata: Metadata = {
  title: "Enock Uwamahoro | Software & Application Engineer",
  description: "Portfolio of Enock Uwamahoro, a Software Engineer building secure, production-ready web applications, APIs and system integrations, from requirements to deployment and support.",
  keywords: "Enock Uwamahoro, Software Engineer, Application Engineer, Full-Stack Developer, REST APIs, System Integration, SDLC, Agile, Docker, CI/CD, Azure, AWS, React, TypeScript, .NET, Kigali, Rwanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
