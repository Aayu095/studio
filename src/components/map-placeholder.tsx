"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MapPlaceholder() {
  return (
    <Card className="w-full shadow-lg bg-card border-border/50">
      <CardHeader>
        <CardTitle className="font-headline text-card-foreground">Interactive Cultural Map</CardTitle>
        <CardDescription className="font-body text-card-foreground/80">
          This area will feature an interactive map of India. Clickable pins will reveal information about folk arts, rituals, food, music, and more.
        </CardDescription>
      </CardHeader>
      <CardContent className="aspect-[16/9] relative bg-muted rounded-md overflow-hidden">
        <Image
          src="https://placehold.co/1200x675/2A1C12/8C5A32.png" // Dark placeholder for India map
          alt="Map of India Placeholder"
          layout="fill"
          objectFit="cover"
          data-ai-hint="India map dark"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-4">
          <p className="text-center text-lg font-semibold text-white">
            Interactive Map Coming Soon!
            <br />
            <span className="text-sm font-normal">(Powered by @vis.gl/react-google-maps with API Key)</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
