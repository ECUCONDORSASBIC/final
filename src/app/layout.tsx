import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/toaster';
import AnimatedBackground from '@/components/AnimatedBackground';
import { NotificationProvider } from '@/contexts/NotificationContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EcuCondor',
  description: 'La plataforma más segura para intercambiar USD, ARS, BRL y WLD',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/image.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/image.svg" />
      </head>
      <body className={inter.className}>
        <Providers>
          <NotificationProvider>
            <div className="min-h-screen relative overflow-hidden bg-[#000B1F]">
              <AnimatedBackground />
              <div className="relative z-10">
                {children}
              </div>
            </div>
            <Toaster />
          </NotificationProvider>
        </Providers>
      </body>
    </html>
  );
}