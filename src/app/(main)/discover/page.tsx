'use client';
import { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CULTURAL_CATEGORIES } from '@/constants';
import { useSearchParams } from 'next/navigation';
import CulturalItemCard from '@/components/cultural-item-card';

export default function DiscoverPage() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get('category') as string) || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const cat = (searchParams.get('category') as string) || 'all';
    if (cat !== selectedCategory) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    console.log('Fetching data...');
    fetch('/api/get-cultures')
      .then(res => res.json())
      .then(data => { console.log('Data received:', data); setItems(data); })
      .catch(err => console.error("Error:", err));
  }, []);

  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter(item => item.category === selectedCategory);

  if (items.length === 0) {
    return <div className="text-center py-12">No data found.</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-2 font-headline">Discover India's Culture</h1>
      <Tabs value={selectedCategory} onValueChange={(v) => setSelectedCategory(v)}>
        <TabsList> {/* use your UI styling here */ }
          <TabsTrigger value="all">All</TabsTrigger>
          {CULTURAL_CATEGORIES.map(c => <TabsTrigger key={c.slug} value={c.slug}>{c.name}</TabsTrigger>)}
        </TabsList>
        <TabsContent value={selectedCategory}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <CulturalItemCard key={item._id} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
