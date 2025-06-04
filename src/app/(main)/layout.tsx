import Header from '@/components/layout/header';
import Link from 'next/link';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="py-6 md:px-8 md:py-0 bg-background border-t border-border/40">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row max-w-screen-xl px-4 md:px-6">
          <p className="text-balance text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} MaatiMap – The Soul of India
          </p>
          <div className="flex gap-x-4 sm:gap-x-6 text-sm">
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="https://github.com/firebase/studio" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Github
            </Link>
            <Link href="/options" className="text-muted-foreground hover:text-foreground transition-colors">
              Options
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
