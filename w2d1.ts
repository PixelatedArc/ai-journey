import 'dotenv/config';
import { generateText } from 'ai';
import { groq } from '@ai-sdk/groq';

const prompt = 'Give me 3 random days in a week. Name only.';

for (const temperature of [0, 0.7, 1.2]) {
  console.log(`\n--- temperature ${temperature} ---`);
  for (let i = 1; i <= 3; i++) {
    const { text } = await generateText({
      model: groq('openai/gpt-oss-120b'),
      prompt,
      temperature,
    });
    console.log(`${i}. ${text}`);
  }
}