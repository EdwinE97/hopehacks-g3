const express = require('express');
const fs = require('fs')
var app = express();


// This middleware will not allow the
// request to go beyond it
app.use(function (req, res, next) {
  console.log("Middleware called")
  next();
});

app.use(express.static('.'))

// Requests will never reach this route
app.get('/doctor/:department', function (req, res) {
  var param = req.params;
  let department = param.department;
  let rawDoctors = fs.readFileSync('doctors.json');
  let doctorsjson = JSON.parse(rawDoctors);
  var docDep = []
  for (var i in doctorsjson) {
    if (doctorsjson[i].department === department) {
      docDep.push(doctorsjson[i])

    }
  }

  console.log(doctorsjson[0].department);
  res.send(docDep);

});



app.listen(3000, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", 3000);
});