"use client";

import { useState, useEffect } from 'react';
import CulturalItemCard from '@/components/cultural-item-card';
import { CULTURAL_CATEGORIES, SAMPLE_CULTURAL_ITEMS } from '@/constants';
import type { CulturalCategorySlug } from '@/lib/types';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useSearchParams } from 'next/navigation';


export default function DiscoverPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') as CulturalCategorySlug | 'all' | null;
  const [selectedCategory, setSelectedCategory] = useState<CulturalCategorySlug | 'all'>(initialCategory || 'all');

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category') as CulturalCategorySlug | 'all' | null;
    if (categoryFromUrl && categoryFromUrl !== selectedCategory) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams, selectedCategory]);

  const filteredItems = selectedCategory === 'all'
    ? SAMPLE_CULTURAL_ITEMS
    : SAMPLE_CULTURAL_ITEMS.filter(item => item.category === selectedCategory);
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-2 font-headline">Discover India's Culture</h1>
      <p className="text-center text-muted-foreground mb-8 font-body">
        Filter by category to explore specific cultural aspects.
      </p>

      <Tabs 
        value={selectedCategory} 
        onValueChange={(value) => setSelectedCategory(value as CulturalCategorySlug | 'all')} 
        className="w-full mb-8"
      >
        <TabsList className="flex overflow-x-auto whitespace-nowrap py-1 space-x-1 sm:justify-center">
          <TabsTrigger value="all">All</TabsTrigger>
          {CULTURAL_CATEGORIES.map(category => (
            <TabsTrigger key={category.slug} value={category.slug}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value={selectedCategory} className="mt-6"> 
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map(item => (
                <CulturalItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground font-body">No items found for this category.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
