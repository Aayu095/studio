import Header from '@/components/layout/header';
import Link from 'next/link';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Placeholder URL for the Indian motifs background image.
  // Replace this with the actual path to your uploaded image.
  // data-ai-hint="Indian motifs pattern dark gold" (for future reference if replacing via an AI tool)
  const globalBackgroundImageUrl = 'https://placehold.co/1920x1080/1c1c1e/b08d57.png';

  return (
    <div
      className="flex min-h-screen flex-col text-foreground"
      style={{
        backgroundImage: `url('${globalBackgroundImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="py-8 bg-background/80 backdrop-blur-sm border-t border-border/40 text-muted-foreground">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6 text-center text-sm">
          <div className="mb-2">
            <Link href="/about" className="hover:text-foreground transition-colors">
              About Us
            </Link>
            <span className="mx-2 text-muted-foreground/50">|</span>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <span className="mx-2 text-muted-foreground/50">|</span>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p>
            &copy; 2025 MaatiMap. All rights reserved. Explore the Digital Soul of India.
          </p>
        </div>
      </footer>
    </div>
  );
}
