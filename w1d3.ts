import 'dotenv/config';
import { generateText } from 'ai';
import { groq } from '@ai-sdk/groq';

const result = await generateText({
  model: groq('openai/gpt-oss-120b'),
  prompt: 'Explain what a CDN is in 10 sentences.',
});

console.log(result.text);
console.log(result.usage); // input tokens, output tokens, total