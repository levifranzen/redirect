const http = require("http");

const PORT = process.env.PORT || 10000;
const TARGET = process.env.TARGET_URL;

if (!TARGET) {
  console.error("TARGET_URL não definido!");
  process.exit(1);
}

http.createServer((req, res) => {
  const location = TARGET.replace(/\/$/, "") + req.url;

  res.writeHead(301, {
    Location: location
  });

  res.end();
}).listen(PORT);
