"use client";

import CulturalItemCard from '@/components/cultural-item-card';
import { SAMPLE_CULTURAL_ITEMS } from '@/constants';
import { useBookmarks } from '@/hooks/use-bookmarks';
import { BookHeart } from 'lucide-react';

export default function BookmarksPage() {
  const { getBookmarkedItems, bookmarksCount, hydrated } = useBookmarks();
  const bookmarkedItems = getBookmarkedItems(SAMPLE_CULTURAL_ITEMS);

  if (!hydrated) {
    // Show a loading state or skeleton while bookmarks are being loaded from localStorage
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <BookHeart className="h-12 w-12 mx-auto text-primary mb-4 animate-pulse" />
        <h1 className="text-3xl font-bold mb-2 font-headline">Loading Your Saved Culture...</h1>
        <p className="text-muted-foreground font-body">Please wait a moment.</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <BookHeart className="h-12 w-12 mx-auto text-primary mb-4" />
        <h1 className="text-3xl font-bold mb-2 font-headline">My Saved Culture</h1>
        <p className="text-muted-foreground font-body">
          Your collection of favorite cultural items. You have {bookmarksCount} item(s) bookmarked.
        </p>
      </div>

      {bookmarksCount > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bookmarkedItems.map(item => (
            <CulturalItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 border-2 border-dashed border-border rounded-lg">
          <BookHeart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <p className="text-xl font-semibold text-muted-foreground mb-2 font-body">No Bookmarks Yet</p>
          <p className="text-muted-foreground font-body">Start exploring and save your favorite cultural discoveries!</p>
        </div>
      )}
    </div>
  );
}
