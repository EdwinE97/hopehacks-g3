const fs = require('fs');
const {
    application
} = require('express');
const express = require('express');
const {
    format
} = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use(function (req, res, next) {
    // console.log("Middleware called");
    next();
  });

//API Middleware
app.use(express.json()); //accepts data in JSON format

app.use(express.urlencoded({
    extended: false
})); //reads the form

app.use(express.static("data")); //serves public folder as a static folder



//API Routes



//Chioma's code---------------------------------------

app.get('/', (req, res) => {
    res.send('data/contact.html');
})


app.post('/', (req, res) => {
    var data = fs.readFileSync('data/providerList.json', 'utf8', function (err, data) {});

    try {
        data = JSON.parse(data)
        console.log(data)
    } catch (e) {
        return data
    }

    const eData = {
        id: data.provider.length + 1,
        name: req.body.fullName,
        department: req.body.department,
        location: req.body.location,
        phone: req.body.phone,
        email: req.body.email
    }

    data.provider.push(eData);

    var writeData = fs.writeFile("data/providerList.json", JSON.stringify(data, null, 2), (err, result) => { // WRITE
        if (err) {
            return console.error(err);
        } else {
            console.log("Success");
            res.send('data/contact.html');
            //  res.status(200).send("Success");
        }
    })
});


// app.put('/doctor/:id', (req,res) =>{
//     const eData = data.employees.find(function(worker){
       
//         return parseInt(req.params.id) === worker.id
//     })

//     if(!eData){
//         res.status(404).send(`Could not find employee matching that ID`)
//     } else{

//         eData.name = req.body.name;
//         eData.salary = req.body.salary;
//         eData.department = req.body.department;

//         res.send(eData)
//         console.log(eData) 
//     }
// })



app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});




