import CulturalSummaryForm from '@/components/ai/cultural-summary-form';
import PlanMyTourForm from '@/components/ai/plan-my-tour-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessagesSquare } from 'lucide-react';

export default function AiGuidePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <MessagesSquare className="h-12 w-12 mx-auto text-primary mb-4" />
        <h1 className="text-3xl font-bold mb-2 font-headline">AI Cultural Guide</h1>
        <p className="text-muted-foreground font-body">
          Your personal assistant for exploring India's culture. Get summaries or plan your tour.
        </p>
      </div>

      <Tabs defaultValue="summary" className="w-full max-w-2xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="summary">Cultural Summary</TabsTrigger>
          <TabsTrigger value="plan-tour">Plan My Tour</TabsTrigger>
        </TabsList>
        <TabsContent value="summary" className="mt-6">
          <CulturalSummaryForm />
        </TabsContent>
        <TabsContent value="plan-tour" className="mt-6">
          <PlanMyTourForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
