import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Sample data for homepage sections
const upcomingEvent = {
  name: 'Theyyam',
  location: 'Kerala',
  date: 'April 7 - 14',
  imageUrl: 'https://placehold.co/600x800/4A3F35/A67B5B.png', // Tall image
  imageHint: 'Theyyam ritual',
  href: '/discover/festivals/theyyam-placeholder', // Placeholder link
};

const localHighlight = {
  name: 'Near You',
  description: 'Based on your location',
  imageUrl: 'https://placehold.co/600x400/4A3F35/A67B5B.png',
  imageHint: 'local market',
  href: '/nearby',
};

const tourPlanner = {
  title: 'Plan a cultural trip to Rajasthan',
  imageUrl: 'https://placehold.co/600x400/4A3F35/A67B5B.png',
  imageHint: 'Rajasthan fort',
  href: '/ai-guide', // Link to AI guide or a specific planner
};

const communityStories = [
  { id: 'madhubani', name: 'Madhubani Painting', location: 'Bihar', imageUrl: 'https://placehold.co/400x300/4A3F35/A67B5B.png', imageHint: 'Madhubani art', href: '/discover/art-forms/madhubani-placeholder' },
  { id: 'biryani-story', name: 'Biryani', location: 'Hyderabad', imageUrl: 'https://placehold.co/400x300/4A3F35/A67B5B.png', imageHint: 'Hyderabadi Biryani', href: '/discover/food/biryani-hyderabadi' },
  { id: 'bharatanatyam', name: 'Bharatanatyam', location: 'Tamil Nadu', imageUrl: 'https://placehold.co/400x300/4A3F35/A67B5B.png', imageHint: 'Bharatanatyam dance', href: '/discover/art-forms/bharatanatyam-placeholder' },
  { id: 'meenakari', name: 'Meenakari Work', location: 'Rajasthan', imageUrl: 'https://placehold.co/400x300/4A3F35/A67B5B.png', imageHint: 'Meenakari craft', href: '/discover/art-forms/meenakari-placeholder' },
];

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://placehold.co/1920x1080/2A1C12/8C5A32.png" // Dark map placeholder
            alt="India Map Background"
            layout="fill"
            objectFit="cover"
            quality={80}
            priority
            data-ai-hint="India map dark"
          />
        </div>
        <div className="relative z-10 text-left md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline mb-6 text-shadow-lg">
            Explore <br /> Cultural India
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 font-body max-w-xl">
            Discover artforms, traditions, food, and festivals across every region.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg shadow-lg">
              <Link href="/">Interactive Map</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="px-8 py-6 text-lg bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-lg shadow-lg">
              <Link href="/ai-guide">Ask AI Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mid Section Cards */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Upcoming Events Card */}
            <Card className="bg-card border-border/50 shadow-xl overflow-hidden flex flex-col group">
              <Link href={upcomingEvent.href} className="block">
                <CardHeader className="p-0">
                  <div className="relative w-full h-64 sm:h-80">
                    <Image
                      src={upcomingEvent.imageUrl}
                      alt={upcomingEvent.name}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={upcomingEvent.imageHint}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-5 relative z-10 mt-[-4rem] text-white">
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-primary mb-1">Upcoming Events</h3>
                  <CardTitle className="text-2xl font-headline mb-1">{upcomingEvent.name}</CardTitle>
                  <p className="text-sm font-body">{upcomingEvent.location}</p>
                  <p className="text-xs font-body text-foreground/70">{upcomingEvent.date}</p>
                </CardContent>
              </Link>
            </Card>

            {/* Local Highlights & Tour Planner side-by-side in the middle column conceptually */}
            <div className="space-y-6 lg:space-y-8 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {/* Local Highlights Card */}
               <Card className="bg-card border-border/50 shadow-xl overflow-hidden group">
                <Link href={localHighlight.href} className="block h-full">
                  <div className="relative w-full h-40 sm:h-48">
                    <Image
                      src={localHighlight.imageUrl}
                      alt={localHighlight.name}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={localHighlight.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <CardContent className="p-5">
                    <CardTitle className="text-xl font-headline mb-1 group-hover:text-primary transition-colors">{localHighlight.name}</CardTitle>
                    <p className="text-sm text-foreground/70 font-body flex items-center">
                      {localHighlight.description}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </p>
                  </CardContent>
                </Link>
              </Card>
              
              {/* Tour Planner Card */}
              <Card className="bg-card border-border/50 shadow-xl overflow-hidden group">
                 <Link href={tourPlanner.href} className="block h-full">
                  <div className="relative w-full h-40 sm:h-48">
                    <Image
                      src={tourPlanner.imageUrl}
                      alt={tourPlanner.title}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={tourPlanner.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-sm uppercase tracking-wider font-semibold text-primary mb-1">Tour Planner</h3>
                    <CardTitle className="text-xl font-headline mb-1 group-hover:text-primary transition-colors leading-tight">{tourPlanner.title}</CardTitle>
                     <p className="text-sm text-foreground/70 font-body flex items-center">
                      Plan your trip <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </p>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stories Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold font-headline">Community Stories</h2>
            <Button variant="link" asChild className="text-primary hover:text-primary/80">
              <Link href="/feed">View More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {communityStories.map((story) => (
              <Card key={story.id} className="bg-card border-border/50 shadow-lg overflow-hidden group">
                <Link href={story.href} className="block">
                  <CardHeader className="p-0">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={story.imageUrl}
                        alt={story.name}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={story.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-headline mb-1 group-hover:text-primary transition-colors">{story.name}</CardTitle>
                    <CardDescription className="text-sm text-foreground/70 font-body">{story.location}</CardDescription>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
