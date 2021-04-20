## Jebrii's Markov Text Generator

This is a very simple implementation of "AI" that I made for fun.

Using an example text, this tool can randomly generate text that mimics the patterns in human language.

## Versions

There are multiple ways to view this tool.

### The Web App

To make this more fun, I skinned it with a React app. Run it with `npm start` and it will port to your `localhost:3000`.

The app should be more or less self-explanatory. The goal is to build a sample of text substantial enough to generate meaningful text.

### Standalone (CL)

In the root directory of this project is a file called `markovTextGen.js`. This is the foundation for the app. If you want to use it alone, you can edit to file to enter a value for the `sampleText` variable, then run it with `$node markovTextGen.js`.

## Sample Text

Sample text is a large string (or strings) of sample human language. The more sample text available to the generator, the more unique the generated text will be. A short sample text will often result in meaningless or looped text.

Note that the sample text must contain only the letters [A-z].
