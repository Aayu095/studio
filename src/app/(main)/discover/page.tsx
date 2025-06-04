"use client";

import { useState } from 'react';
import CulturalItemCard from '@/components/cultural-item-card';
import { CULTURAL_CATEGORIES, SAMPLE_CULTURAL_ITEMS } from '@/constants';
import type { CulturalCategorySlug } from '@/lib/types';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function DiscoverPage() {
  const [selectedCategory, setSelectedCategory] = useState<CulturalCategorySlug | 'all'>('all');

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
        defaultValue="all" 
        onValueChange={(value) => setSelectedCategory(value as CulturalCategorySlug | 'all')} 
        className="w-full mb-8"
      >
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          <TabsTrigger value="all">All</TabsTrigger>
          {CULTURAL_CATEGORIES.map(category => (
            <TabsTrigger key={category.slug} value={category.slug}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all" className="mt-6"> 
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

        {CULTURAL_CATEGORIES.map(category => (
          <TabsContent key={`${category.slug}-content`} value={category.slug} className="mt-6">
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
        ))}
      </Tabs>
    </div>
  );
}
