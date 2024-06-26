const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  console.log("request made");
  response.setHeader("Content-Type", "text/html");

  let path = "./files";
  switch (request.url) {
    case "/":
      path += "/index.html";
      response.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      response.statusCode = 200;
      break;
    case "/contact-me":
      path += "/contact-me.html";
      response.statusCode = 200;
      break;
      case "/about-old":
        response.statusCode = 301;
        response.setHeader("Location", "/about")
        response.end();
        break;
    default:
      path += "/404.html";
      response.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      response.end();
    } else {
      response.end(data);
    }
  })
});

server.listen(8080, "localhost", () => {
  console.log("listening...")
});