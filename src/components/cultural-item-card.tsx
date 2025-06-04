"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, StarOff } from 'lucide-react';
import type { CulturalItem, CulturalCategorySlug } from '@/lib/types';
import { CULTURAL_CATEGORIES } from '@/constants';
import { useBookmarks } from '@/hooks/use-bookmarks';
import Link from 'next/link'; // Import Link

interface CulturalItemCardProps {
  item: CulturalItem;
}

export default function CulturalItemCard({ item }: CulturalItemCardProps) {
  const { isBookmarked, toggleBookmark, hydrated } = useBookmarks();
  const categoryInfo = CULTURAL_CATEGORIES.find(cat => cat.slug === item.category);

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation if card is wrapped in Link
    e.stopPropagation();
    toggleBookmark(item.id);
  };

  // A placeholder link, ideally this would go to a detailed page for the item
  const itemDetailLink = `/discover/${item.category}/${item.id}`;


  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <Link href={itemDetailLink} legacyBehavior>
        <a className="block">
          <CardHeader className="p-0">
            <div className="relative w-full h-48">
              <Image
                src={item.imageUrl}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                data-ai-hint={item.imageHint || item.name.toLowerCase()}
              />
            </div>
          </CardHeader>
        </a>
      </Link>
      <CardContent className="p-4 flex-grow">
        <Link href={itemDetailLink} legacyBehavior>
          <a className="block">
            <CardTitle className="text-lg font-headline mb-2 hover:text-primary transition-colors">{item.name}</CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-2 font-body">{item.summary}</p>
          </a>
        </Link>
        {categoryInfo && (
          <Badge variant="secondary" className="text-xs mb-2">{categoryInfo.name}</Badge>
        )}
        <Badge variant="outline" className="text-xs">{item.region}</Badge>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {hydrated && (
          <Button variant="ghost" size="sm" onClick={handleBookmarkToggle} className="w-full justify-start text-muted-foreground hover:text-primary">
            {isBookmarked(item.id) ? <Star className="h-4 w-4 mr-2 fill-primary text-primary" /> : <StarOff className="h-4 w-4 mr-2" />}
            {isBookmarked(item.id) ? 'Bookmarked' : 'Bookmark'}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
