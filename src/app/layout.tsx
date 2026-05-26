import type { Metadata } from 'next';
import './globals.css';
import ReserveModal from '@/components/ReserveModal';
import Pixels from '@/components/Pixels';

export const metadata: Metadata = {
  title: '5 Reasons',
  description: 'Cloned page (design template).',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ReserveModal />
        <Pixels />
      </body>
    </html>
  );
}
