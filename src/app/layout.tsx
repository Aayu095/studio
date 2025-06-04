import type { Metadata } from 'next';
import { Inter, Source_Code_Pro, Montserrat } from 'next/font/google'; // Import Montserrat
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

// Initialize fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], variable: '--font-source-code-pro', display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap', weights: ['400', '500', '600', '700', '800'] }); // Added Montserrat

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
        {/* next/font handles font loading, direct links usually not needed with it */}
      </head>
      <body className={`${inter.variable} ${sourceCodePro.variable} ${montserrat.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
