const http = require("http");

const PORT = process.env.PORT || 10000;

http.createServer((req, res) => {
  res.writeHead(301, {
    Location: "http://dnsgma.live" + req.url
  });
  res.end();
}).listen(PORT);
