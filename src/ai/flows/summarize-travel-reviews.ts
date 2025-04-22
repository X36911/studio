'use server';
/**
 * @fileOverview Summarizes travel reviews for a given location.
 *
 * - summarizeTravelReviews - A function that summarizes travel reviews.
 * - SummarizeTravelReviewsInput - The input type for the summarizeTravelReviews function.
 * - SummarizeTravelReviewsOutput - The return type for the summarizeTravelReviews function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SummarizeTravelReviewsInputSchema = z.object({
  location: z.string().describe('The location to summarize reviews for.'),
  reviewText: z.string().describe('The text of the reviews.'),
});
export type SummarizeTravelReviewsInput = z.infer<
  typeof SummarizeTravelReviewsInputSchema
>;

const SummarizeTravelReviewsOutputSchema = z.object({
  summary: z.string().describe('A summary of the reviews.'),
  sentiment: z.string().describe('The overall sentiment of the reviews.'),
});
export type SummarizeTravelReviewsOutput = z.infer<
  typeof SummarizeTravelReviewsOutputSchema
>;

export async function summarizeTravelReviews(
  input: SummarizeTravelReviewsInput
): Promise<SummarizeTravelReviewsOutput> {
  return summarizeTravelReviewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTravelReviewsPrompt',
  input: {
    schema: z.object({
      location: z.string().describe('The location to summarize reviews for.'),
      reviewText: z.string().describe('The text of the reviews.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A summary of the reviews.'),
      sentiment: z.string().describe('The overall sentiment of the reviews.'),
    }),
  },
  prompt: `You are a travel expert summarizing reviews for locations.

  Location: {{{location}}}
  Reviews: {{{reviewText}}}

  Please provide a concise summary of the reviews and the overall sentiment.
  `,
});

const summarizeTravelReviewsFlow = ai.defineFlow<
  typeof SummarizeTravelReviewsInputSchema,
  typeof SummarizeTravelReviewsOutputSchema
>(
  {
    name: 'summarizeTravelReviewsFlow',
    inputSchema: SummarizeTravelReviewsInputSchema,
    outputSchema: SummarizeTravelReviewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
