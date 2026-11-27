```import 'dotenv/config';
import { generateText } from 'ai';
import { groq } from '@ai-sdk/groq';

const model = groq('openai/gpt-oss-120b');
const prompt = 'Write a short intro for a dentist website homepage.';

// A) topP: only sample from the most likely words
console.log((await generateText({ model, prompt, topP: 0.3 })).text);
console.log((await generateText({ model, prompt, topP: 1 })).text);

// // B) Hard length cap (counted in tokens; the text can get cut mid-sentence)
// console.log((await generateText({ model, prompt, maxOutputTokens: 50 })).text);

// // C) System prompt = the model's role and rules
// console.log((await generateText({
//   model,
//   system: 'You are a luxury brand copywriter. Calm, confident, max 40 words.',
//   prompt,
// })).text);