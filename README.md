# ChatGPT CLI Tool

This CLI tool allows you to send a prompt to OpenAI's GPT-4 model and receive a response directly from the command line. It uses `axios` for HTTP requests, `yargs` for command line argument parsing, and `dotenv` for environment variable management.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- OpenAI API key

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/chatgpt-cli-tool.git
   cd chatgpt-cli-tool
   ```
2.) Install the required dependencies:
   ```sh
   npm install
   ```
3.) Create a .env file in the root directory and add your OpenAI API key:
   ```sh
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## Usage

To use the CLI tool, run the following command in this format:
   ```sh
   node index.js -p "Enter prompt here"
   ```

## Example
   ```sh
   node index.js -p "Explain the concept of recursion in computer science."
   ```

## Command Line Options
-p, --prompt: The prompt to send to ChatGPT. This option is required.
-h, --help: Show help information.

## Sample Output
   ```vbnet
   Response from ChatGPT:
   Choice 1: Recursion in computer science is a method where the solution to a problem depends on solutions to smaller instances of the same problem. A recursive function calls itself with modified parameters, allowing the problem to be solved in a step-by-step    manner until a base case is reached.
   ```
## Error Handling

If the OpenAI API key is not found in the environment variables, the tool will display the following error message and exit:
   ```vbnet
   OpenAI API key not found. Set the OPENAI_API_KEY environment variable.
   ```
If there's an error querying the OpenAI API, the tool will display the error message and exit:
   ```vbnet
   Error querying OpenAI: [Detailed error message]
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

# Contributing

Contributions are welcome! Please fork the repository and submit a pull request. Would like to ideally have a frontend GUI at some point.


