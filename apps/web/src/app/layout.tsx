import './global.css';
import { defaultMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import Header from '@/components/layout/header/Header';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="is">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
