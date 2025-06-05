"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { culturalItemSummary, type CulturalItemSummaryOutput } from '@/ai/flows/cultural-summary'; 
import { Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const FormSchema = z.object({
  culturalItem: z.string().min(3, { message: "Please enter a cultural item name (min 3 chars)." }),
});

export default function CulturalSummaryForm() {
  const [summary, setSummary] = useState<CulturalItemSummaryOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      culturalItem: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setError(null);
    setSummary(null);
    try {
      const result = await culturalItemSummary({ culturalItem: data.culturalItem });
      setSummary(result);
    } catch (e) {
      setError("Failed to get summary. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Cultural Item Summary</CardTitle>
        <CardDescription className="font-body text-xs">
          Enter the name of an art form, region, or festival to get an AI-generated summary.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="culturalItem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="culturalItem" className="font-body text-sm">Cultural Item Name</FormLabel>
                  <FormControl>
                    <Input id="culturalItem" placeholder="e.g., Taj Mahal, Kathakali, Diwali" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto text-sm">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Get Summary
            </Button>
          </CardFooter>
        </form>
      </Form>

      {error && <p className="p-4 text-destructive font-body text-sm">{error}</p>}

      {summary && (
        <CardContent className="mt-6">
          <h3 className="text-lg font-semibold mb-2 font-headline">Summary Result:</h3>
          <div className="prose prose-sm max-w-none bg-secondary/30 p-4 rounded-md font-body text-sm">
             <ReactMarkdown>{summary.summary}</ReactMarkdown>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
