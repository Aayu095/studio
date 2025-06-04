"use client";

import { useState, useEffect, useCallback } from 'react';
import type { CulturalItem } from '@/lib/types';

const BOOKMARKS_KEY = 'maatimap_bookmarks';

export function useBookmarks() {
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedBookmarks = localStorage.getItem(BOOKMARKS_KEY);
      if (storedBookmarks) {
        setBookmarkedIds(new Set(JSON.parse(storedBookmarks)));
      }
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(Array.from(bookmarkedIds)));
    }
  }, [bookmarkedIds, hydrated]);

  const addBookmark = useCallback((itemId: string) => {
    setBookmarkedIds(prev => {
      const newSet = new Set(prev);
      newSet.add(itemId);
      return newSet;
    });
  }, []);

  const removeBookmark = useCallback((itemId: string) => {
    setBookmarkedIds(prev => {
      const newSet = new Set(prev);
      newSet.delete(itemId);
      return newSet;
    });
  }, []);

  const isBookmarked = useCallback((itemId: string) => {
    return bookmarkedIds.has(itemId);
  }, [bookmarkedIds]);

  const toggleBookmark = useCallback((itemId: string) => {
    if (isBookmarked(itemId)) {
      removeBookmark(itemId);
    } else {
      addBookmark(itemId);
    }
  }, [isBookmarked, addBookmark, removeBookmark]);
  
  const getBookmarkedItems = useCallback((allItems: CulturalItem[]): CulturalItem[] => {
    if (!hydrated) return [];
    return allItems.filter(item => bookmarkedIds.has(item.id));
  }, [bookmarkedIds, hydrated]);

  return { 
    bookmarkedIds, 
    addBookmark, 
    removeBookmark, 
    isBookmarked, 
    toggleBookmark,
    getBookmarkedItems,
    bookmarksCount: bookmarkedIds.size,
    hydrated // expose hydration status
  };
}
