import type { Metadata } from 'next';
import { Inter, Source_Code_Pro } from 'next/font/google'; // Import Source_Code_Pro
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

// Initialize fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], variable: '--font-source-code-pro' });

export const metadata: Metadata = {
  title: 'MaatiMap: Digital Soul of India',
  description: 'Discover India\'s rich cultural heritage with MaatiMap.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Keep existing Google Font links if any, or rely on next/font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Example for Inter - next/font handles this better if not using direct links */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" /> */}
        {/* Add Source Code Pro if managed via direct links, otherwise next/font is fine */}
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${sourceCodePro.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
