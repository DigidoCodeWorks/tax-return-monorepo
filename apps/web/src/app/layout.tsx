import './global.css';
import { defaultMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import Header from '@/components/layout/header/Header';
import { ibmPlexSans } from '@/lib/fonts';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <Header />
      <body>{children}</body>
    </html>
  );
}
