import type { LucideIcon } from 'lucide-react';

export type CulturalCategorySlug = 'art-forms' | 'food' | 'heritage-sites' | 'rituals' | 'music' | 'festivals';

export interface CulturalCategory {
  name: string;
  slug: CulturalCategorySlug;
  icon?: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>; // Allow Lucide or custom SVG
  description: string;
}

export interface CulturalItem {
  id: string;
  name: string;
  summary: string;
  description?: string; // Optional full description
  category: CulturalCategorySlug;
  imageUrl: string;
  imageHint?: string; // For data-ai-hint
  latitude?: number;
  longitude?: number;
  region: string; // e.g., "Kerala", "Rajasthan"
  tags: string[];
}
