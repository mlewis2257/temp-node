const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Homepage");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  // res.end(`
  //   <h1>Oooops</h1>
  //   <p>We can't seem to find the page you were looking for</p>
  //   <a href='/'>Back Home</a>
  // `);
});

server.listen(3000);
