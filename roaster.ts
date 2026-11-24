import 'dotenv/config';
import { readFile } from 'node:fs/promises';
import { generateText } from 'ai';
import { groq } from '@ai-sdk/groq';

const site = await readFile('site.txt', 'utf8');

const { text } = await generateText({
  model: groq('openai/gpt-oss-120b'),
  system: 'You are a blunt senior conversion copywriter. No fluff.',
  prompt: `Critique this homepage copy.
Return these sections:
1. Headline (score /10 + why)
2. CTA (score /10 + why)
3. Trust signals (what is missing)
4. Three quick fixes, rewritten

<homepage>
${site}
</homepage>`,
});

console.log(text);