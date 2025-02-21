import type { Metadata } from 'next';
import Script from 'next/script';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsmono',
});

export const metadata: Metadata = {
  title: 'Alex Mejicanos',
  description:
    'Alex Mejicanos - Fullstack Developer / Freelancer / Senior Software Engineer / Software Architect / Speaker / Mentor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-97YNKR4ED9"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-97YNKR4ED9');
          `}
        </Script>
      </head>
      <body className={`${jetBrainsMono.variable}`}>
        <main className="flex flex-col xl:h-screen xl:justify-between">
          <div className="flex flex-col">
            <Header />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
