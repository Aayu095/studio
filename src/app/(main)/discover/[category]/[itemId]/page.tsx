"use client";

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { SAMPLE_CULTURAL_ITEMS, CULTURAL_CATEGORIES } from '@/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, StarOff, ArrowLeft, MapPin as MapPinIcon } from 'lucide-react';
import { useBookmarks } from '@/hooks/use-bookmarks';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function CulturalItemDetailPage() {
  const params = useParams();
  const itemId = params.itemId as string;
  
  const { isBookmarked, toggleBookmark, hydrated } = useBookmarks();

  const item = SAMPLE_CULTURAL_ITEMS.find(i => i.id === itemId);
  const categoryInfo = item ? CULTURAL_CATEGORIES.find(cat => cat.slug === item.category) : null;

  if (!item) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-2xl font-bold text-destructive font-headline">Item not found</h1>
        <p className="text-muted-foreground font-body">The cultural item you are looking for does not exist or has been moved.</p>
        <Button asChild className="mt-4">
          <Link href="/discover">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Discover
          </Link>
        </Button>
      </div>
    );
  }

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleBookmark(item.id);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Button asChild variant="outline" className="mb-6">
        <Link href={`/discover?category=${item.category}`}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to {categoryInfo?.name || 'Discover'}
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-xl">
        <CardHeader className="p-0 relative">
          <div className="w-full h-64 md:h-96 relative">
            <Image
              src={item.imageUrl}
              alt={item.name}
              layout="fill"
              objectFit="cover"
              data-ai-hint={item.imageHint || item.name.toLowerCase()}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <CardTitle className="text-3xl md:text-4xl font-headline mb-2 md:mb-0">{item.name}</CardTitle>
            {hydrated && (
              <Button variant="ghost" size="lg" onClick={handleBookmarkToggle} className="text-muted-foreground hover:text-primary self-start md:self-center">
                {isBookmarked(item.id) ? <Star className="h-6 w-6 mr-2 fill-primary text-primary" /> : <StarOff className="h-6 w-6 mr-2" />}
                {isBookmarked(item.id) ? 'Bookmarked' : 'Bookmark'}
              </Button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {categoryInfo && (
              <Badge variant="secondary" className="text-sm px-3 py-1">{categoryInfo.name}</Badge>
            )}
            <Badge variant="outline" className="text-sm px-3 py-1 flex items-center">
              <MapPinIcon className="h-4 w-4 mr-1.5" />
              {item.region}
            </Badge>
            {item.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-sm px-3 py-1 capitalize">{tag}</Badge>
            ))}
          </div>

          <CardDescription className="text-lg text-foreground mb-6 font-body">{item.summary}</CardDescription>
          
          {item.description && (
            <div className="prose max-w-none prose-headings:font-headline prose-p:font-body">
              <ReactMarkdown>{item.description}</ReactMarkdown>
            </div>
          )}

        </CardContent>
        {(item.latitude && item.longitude) && (
          <CardFooter className="p-6 bg-muted/50">
             <p className="text-sm text-muted-foreground font-body">
                Find it on the map: Latitude: {item.latitude}, Longitude: {item.longitude}
             </p>
             {/* Placeholder for a small map snippet or link to main map */}
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
