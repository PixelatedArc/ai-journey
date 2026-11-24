import 'dotenv/config';
import { streamText, type ModelMessage } from 'ai';
import { groq } from '@ai-sdk/groq';
import * as readline from 'node:readline/promises';

const terminal = readline.createInterface({ input: process.stdin, output: process.stdout });
const messages: ModelMessage[] = [];

while (true) {
  const input = await terminal.question('You: ');
  if (input === 'exit') break;

  messages.push({ role: 'user', content: input });

  const result = streamText({ model: groq('openai/gpt-oss-120b'), messages });

  let reply = '';
  process.stdout.write('AI: ');
  for await (const chunk of result.textStream) {
    reply += chunk;
    process.stdout.write(chunk);
  }
  process.stdout.write('\n\n');

  messages.push({ role: 'assistant', content: reply });
}
terminal.close();