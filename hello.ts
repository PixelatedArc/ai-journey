import 'dotenv/config';
import { generateText } from 'ai';
import { groq } from '@ai-sdk/groq';

const { text } = await generateText({
  model: groq('llama-3.3-70b-versatile'),
  prompt: 'Say hi to Hasan in one sentence.',
});

console.log(text);