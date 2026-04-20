import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FT Fintech - Innovate Your Finance',
  description: 'Cutting-edge fintech tools to streamline operations and drive growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}