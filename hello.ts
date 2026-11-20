import 'dotenv/config';
import { generateText } from 'ai';
import { groq } from '@ai-sdk/groq';

const { text } = await generateText({
  model: groq('openai/gpt-oss-120b'),
  prompt: 'Say hi to Hasan in one sentence.',
});

console.log(text);