import '@/app/ui/global.css';
import { Inter } from 'next/font/google';
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Setiap UI yang Anda tambahkan ke tata letak akar akan dibagikan di semua halaman dalam aplikasi Anda. */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
