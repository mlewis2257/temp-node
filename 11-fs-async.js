const { readFile, writeFile } = require("fs");

// Using the Node.js fs module, write a function readAndAppend(filePath, textToAppend) that:
// Reads the contents of the file at filePath asynchronously.
// Appends textToAppend to the end of the file’s content.
// Writes the updated content back to the same file.
// Properly handles errors (e.g., file doesn’t exist).
async function readAndAppend(filePath, textToAppend) {
  const readFileContent = await readFile(filePath);
  const append = await readFileContent.append(textToAppend);

  const writeNewText = await writeFile(filePath, append, (err) => {
    if (err) {
      throw new err();
    }
  });
  return writeNewText;
}
console.log("Starting the next task");
