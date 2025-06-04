'use server';

/**
 * @fileOverview Summarizes information about a cultural item (art form, festival, region) including its history, significance, and key aspects.
 *
 * - culturalItemSummary - A function that summarizes cultural items.
 * - CulturalItemSummaryInput - The input type for the culturalItemSummary function.
 * - CulturalItemSummaryOutput - The return type for the culturalItemSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CulturalItemSummaryInputSchema = z.object({
  culturalItem: z.string().describe('The name of the cultural item to summarize.'),
});

export type CulturalItemSummaryInput = z.infer<typeof CulturalItemSummaryInputSchema>;

const CulturalItemSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the cultural item, including its history, significance, and key aspects.'),
});

export type CulturalItemSummaryOutput = z.infer<typeof CulturalItemSummaryOutputSchema>;

export async function culturalItemSummary(input: CulturalItemSummaryInput): Promise<CulturalItemSummaryOutput> {
  return culturalItemSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'culturalItemSummaryPrompt',
  input: {schema: CulturalItemSummaryInputSchema},
  output: {schema: CulturalItemSummaryOutputSchema},
  prompt: `Provide a concise summary of the following cultural item, including its history, significance, and key aspects:\n\n{{culturalItem}}`,
});

const culturalItemSummaryFlow = ai.defineFlow(
  {
    name: 'culturalItemSummaryFlow',
    inputSchema: CulturalItemSummaryInputSchema,
    outputSchema: CulturalItemSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
