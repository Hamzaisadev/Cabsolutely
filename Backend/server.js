// this file will run the whole app
const http = require("http");
// importing the app.js
const app = require("./app");
const port = process.env.PORT;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
