const http = require("http");

// Configure the host name and port number.
// Port 3000 is already running for PostgreSQL, so I use port 8000 instead.
const hostname = "localhost";
const port = 8000;

// Use a createServer() function to establish a server.  It takes an anonymous function as argument.
// The function has req and res objects.
// Use res.end() to finish sending the request.  "Welcome to Node!" will be displayed on the web page.
// req.url gets the URL (path) after the domain name, in this case, the path after localhost:3000.
// If I go to localhost:3000/translations, a message that says "translations" will appear on the web page.
// translations stores an object of JSON type, which is then transform into a string and be written out on the web page.
const server = http.createServer((req, res) => {
  const { url } = req;
  console.log(url);
  if (url === "/translations") {
    const translations = { 1: "one", 2: "two", 3: "three" };
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(translations));
    res.end();
  }
  res.end("Welcome to Node!");
});

// Listen to the server, pass in port, hostname, and an anonymous function as arguments.
server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`);
});
