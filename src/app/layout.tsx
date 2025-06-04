import type { Metadata } from 'next';
import { Poppins, Playfair_Display, Source_Code_Pro } from 'next/font/google'; // Import Poppins & Playfair Display
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

// Initialize fonts
const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins', 
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'] 
});

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair-display', 
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900']
});

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], variable: '--font-source-code-pro', display: 'swap' });


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
      <body className={`${poppins.variable} ${playfairDisplay.variable} ${sourceCodePro.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
