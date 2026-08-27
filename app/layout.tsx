import type { Metadata } from 'next';
import './globals.css';

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
);

export const metadata: Metadata = {
  metadataBase,
  title: 'Heng Li — Extremal Combinatorics',
  description:
    'The personal research homepage of Heng Li, working in extremal combinatorics and extremal problems in hypergraphs.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: 'Heng Li — Extremal Combinatorics',
    description:
      'Research in extremal combinatorics and extremal problems in hypergraphs.',
  },
  twitter: {
    card: 'summary',
    title: 'Heng Li — Extremal Combinatorics',
    description:
      'Research in extremal combinatorics and extremal problems in hypergraphs.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
