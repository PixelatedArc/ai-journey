import 'dotenv/config';
import { streamText } from 'ai';
import { groq } from '@ai-sdk/groq';

const result = streamText({
  model: groq('openai/gpt-oss-120b'),
  prompt: 'Write a 150-word About section for a premium web design studio.',
});

for await (const chunk of result.textStream) {
  process.stdout.write(chunk);
}
console.log();