// File: src/ai/flows/generate-travel-recommendations.ts
'use server';
/**
 * @fileOverview A travel recommendation AI agent.
 *
 * - generateTravelRecommendations - A function that handles the travel recommendation process.
 * - GenerateTravelRecommendationsInput - The input type for the generateTravelRecommendations function.
 * - GenerateTravelRecommendationsOutput - The return type for the generateTravelRecommendations function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateTravelRecommendationsInputSchema = z.object({
  preferences: z
    .string()
    .describe(
      'The user preferences for travel, including budget, preferred destinations, and travel style.'
    ),
  historicalData: z
    .string()
    .optional()
    .describe('The user historical travel data, optional.'),
});
export type GenerateTravelRecommendationsInput = z.infer<typeof GenerateTravelRecommendationsInputSchema>;

const GenerateTravelRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      'A list of personalized travel recommendations based on the user preferences and historical data.'
    ),
});
export type GenerateTravelRecommendationsOutput = z.infer<typeof GenerateTravelRecommendationsOutputSchema>;

export async function generateTravelRecommendations(
  input: GenerateTravelRecommendationsInput
): Promise<GenerateTravelRecommendationsOutput> {
  return generateTravelRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTravelRecommendationsPrompt',
  input: {
    schema: z.object({
      preferences: z
        .string()
        .describe(
          'The user preferences for travel, including budget, preferred destinations, and travel style.'
        ),
      historicalData: z
        .string()
        .optional()
        .describe('The user historical travel data, optional.'),
    }),
  },
  output: {
    schema: z.object({
      recommendations: z
        .string()
        .describe(
          'A list of personalized travel recommendations based on the user preferences and historical data.'
        ),
    }),
  },
  prompt: `You are a travel expert. Based on the user's preferences and historical data, provide personalized travel recommendations. 

User Preferences: {{{preferences}}}
Historical Data: {{{historicalData}}}

Recommendations:`,
});

const generateTravelRecommendationsFlow = ai.defineFlow<
  typeof GenerateTravelRecommendationsInputSchema,
  typeof GenerateTravelRecommendationsOutputSchema
>(
  {
    name: 'generateTravelRecommendationsFlow',
    inputSchema: GenerateTravelRecommendationsInputSchema,
    outputSchema: GenerateTravelRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
