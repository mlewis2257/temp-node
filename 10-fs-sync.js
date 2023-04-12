const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.text",
  `This here is your result ${first}, ${second}`,
  { flag: "a" }
);

console.log("Done wtih the task");
console.log("Starting the next one");
