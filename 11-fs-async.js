const { readFile, writeFile } = require("fs");
console.log("Start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Not sure what's going on! Here's your result: ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return null;
        }
        console.log("Done with this task");
      }
    );
  });
});

console.log("Starting the next task");
