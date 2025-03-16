const { readFile, writeFile } = require("fs");
// Using the Node.js fs module, write a function readAndAppend(filePath, textToAppend) that:
// Reads the contents of the file at filePath asynchronously.
// Appends textToAppend to the end of the file’s content.
// Writes the updated content back to the same file.
// Properly handles errors (e.g., file doesn’t exist).
async function readAndAppend(filePath, textToAppend) {
  try {
    let fileContent = await readFile(filePath, "utf8", (err, data) => {
      err ? console.log(err) : console.log("read file");
    });
    let updateContent = (fileContent += textToAppend);
    return await writeFile(filePath, updateContent, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log("data appended successfully");
    });
  } catch (error) {
    console.error(error);
  }
}

readAndAppend("message.txt", "\n I have this job")
  .then(() => {
    console.log("Done Successfully");
  })
  .catch((err) => {
    console.log(err);
  });
