//  Manual way to create a package.json in the root, create properties etc
// npm init (step by step, press enter to skip)
// npm init --y to skip
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("HomePage");
  }
  if (req.url === "/about") {
    res.end("This is the history of our company...");
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i}, ${j}`);
      }
    }
  } else {
    res.end("Error");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port : 3000...");
});

// console.log("first");
// setTimeout(() => {
//   console.log("second");
// }, 10000);
// console.log("third");

// setInterval(() => {
//   console.log("Hello Handsome");
// }, 10000);
// console.log("execute this next");
