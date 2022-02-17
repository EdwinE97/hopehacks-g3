const fs = require("fs");
const http = require("http");
// const data = require("./data/doctors.json");
// const express = require("express");
// const app = express();
const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "Text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error :  File Not Found ");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log("something went worong", error);
  } else {
    console.log("server is lestening on port" + port);
  }
});

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/doctors", (req, res) => {
//   if (!data) {
//     res.send("Make sure that you have accessible data");
//   } else {
//     res.send(data);
//   }
// });

// app.get("/doctors/:id", (req, res) => {
//   const eData = data.doctors.find(function (worker) {
//     return parseInt(req.params.id) === worker.id;
//   });
//   if (!eData) {
//     res.status(404).send(`Could not find employee matching that ID`);
//   } else {
//     res.send(eData);
//   }
// });
