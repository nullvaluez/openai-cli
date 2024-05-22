#!/usr/bin/env node
const { exec } = require('child_process');
const axios = require('axios');
const yargs = require('yargs/yargs');
const dotenv = require('dotenv');
dotenv.config();

// Function to send a request to openai api
async function queryChatGPT(prompt, apiKey) {
  const url = 'https://api.openai.com/v1/chat/completions';

  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  };

  const data = {
    model: "gpt-4o-2024-05-13",
    messages: [{ role: "user", content: prompt }]
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('Error querying OpenAI:', error.response ? error.response.data : error.message);
    process.exit(1);
  }
}

// Setup yargs to parse command line arguments
const argv = yargs(process.argv.slice(2))
  .usage('Usage: $0 -p "<prompt>"')
  .option('p', {
    alias: 'prompt',
    describe: 'Prompt to send to ChatGPT',
    type: 'string',
    demandOption: true,
  })
  .help('h')
  .alias('h', 'help')
  .argv;

// Main function to execute the CLI logic
async function main() {
  const { prompt } = argv;
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('OpenAI API key not found. Set the OPENAI_API_KEY environment variable.');
    process.exit(1);
  }
  const result = await queryChatGPT(prompt, apiKey);
  
  // Display the result
  console.log("Response from ChatGPT:");
  result.choices.forEach((choice, index) => {
    console.log(`Choice ${index + 1}:`, choice.message.content);
  });
}

main();
