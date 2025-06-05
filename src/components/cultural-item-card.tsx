"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, StarOff } from 'lucide-react';
import type { CulturalItem, CulturalCategorySlug } from '@/lib/types';
import { CULTURAL_CATEGORIES } from '@/constants';
import { useBookmarks } from '@/hooks/use-bookmarks';
import Link from 'next/link'; 

interface CulturalItemCardProps {
  item: CulturalItem;
}

export default function CulturalItemCard({ item }: CulturalItemCardProps) {
  const { isBookmarked, toggleBookmark, hydrated } = useBookmarks();
  const categoryInfo = CULTURAL_CATEGORIES.find(cat => cat.slug === item.category);

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();
    toggleBookmark(item.id);
  };

  const itemDetailLink = `/discover/${item.category}/${item.id}`;


  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <Link href={itemDetailLink} legacyBehavior>
        <a className="block">
          <CardHeader className="p-0">
            <div className="relative w-full h-40"> {/* Reduced height from h-48 */}
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
      <CardContent className="p-3 flex-grow"> {/* Reduced padding from p-4 */}
        <Link href={itemDetailLink} legacyBehavior>
          <a className="block">
            <CardTitle className="text-base font-headline mb-1.5 hover:text-primary transition-colors">{item.name}</CardTitle> {/* Reduced size & margin */}
            <p className="text-xs text-muted-foreground line-clamp-2 mb-1.5 font-body">{item.summary}</p> {/* Reduced size, line-clamp & margin */}
          </a>
        </Link>
        {categoryInfo && (
          <Badge variant="secondary" className="text-[10px] mb-1.5 px-1.5 py-0.5">{categoryInfo.name}</Badge> 
        )}
        <Badge variant="outline" className="text-[10px] px-1.5 py-0.5">{item.region}</Badge>
      </CardContent>
      <CardFooter className="p-3 pt-0"> {/* Reduced padding */}
        {hydrated && (
          <Button variant="ghost" size="sm" onClick={handleBookmarkToggle} className="w-full justify-start text-muted-foreground hover:text-primary text-xs"> {/* Reduced size */}
            {isBookmarked(item.id) ? <Star className="h-3.5 w-3.5 mr-1.5 fill-primary text-primary" /> : <StarOff className="h-3.5 w-3.5 mr-1.5" />}
            {isBookmarked(item.id) ? 'Bookmarked' : 'Bookmark'}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
