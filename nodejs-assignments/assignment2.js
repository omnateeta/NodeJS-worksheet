 // Import required modules
const http = require('http');
const url = require('url');

// Create an HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // Log request with timestamp and path
  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] ${method} request received for ${path}`);

  // Set the Content-Type header
  res.setHeader('Content-Type', 'text/plain');

  // Handle only GET requests
  if (method === 'GET') {
    if (path === '/') {
      res.statusCode = 200;
      res.end('Welcome to My Server');
    } else if (path === '/about') {
      res.statusCode = 200;
      res.end('This is the About Page');
    } else if (path === '/contact') {
      res.statusCode = 200;
      res.end('Contact us at: contact@example.com');
    } else {
      res.statusCode = 404;
      res.end('404 - Page Not Found');
    }
  } else {
    // If not a GET request
    res.statusCode = 405;
    res.end('405 - Method Not Allowed');
  }
});


// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
