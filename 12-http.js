const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello World");
  } else {
    res.end("Not Found");
  }
});

server.listen(3000, console.log("Listening on port 3000"));
