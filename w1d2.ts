import 'dotenv/config';
import { generateText } from 'ai';
import { groq } from '@ai-sdk/groq';

for (let i = 1; i <= 5; i++) {
  const { text } = await generateText({
    model: groq('openai/gpt-oss-120b'),
    prompt: 'Write a one-line tagline for a dental clinic.',
  });
  console.log(`${i}. ${text}`);
}