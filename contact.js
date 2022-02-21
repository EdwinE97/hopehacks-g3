const fs = require ('fs');
const { application } = require('express');
const express = require('express');
const { format } = require('path');
const port = process.env.PORT || 9000;

const app = express();

//API Middleware
app.use(express.json()); //accepts data in JSON format

app.use(express.urlencoded({extended: false})); //reads the form

app.use(express.static("data")); //serves public folder as a static folder



//API Routes

app.get('/', (req, res)=>{
    

    res.sendFile(__form + '/images/contact.html');

    
})




 doctors={};

    let hope=[];

    doctors.hope = []

 
app.post('/', (req, res)=>{


    var data = fs.readFileSync('images/contact.json', 'utf8', function(err, data){
   
    });



const eData = {
    //id: doctors.hope.length + 1,
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email
    }

    
try {
    data = JSON.parse(data)
    console.log(data)
    } 
catch (e) 
  {
   return data 
  }
 
data.hope.push(eData);

    
    var writeData = fs.writeFile("images/contact.json", JSON.stringify(data, null, 2), (err, result) => {  // WRITE
            if (err) {
                return console.error(err);
            } else {
                console.log("Success");
                
            }
    
        })

});



app.listen(port, ()=>{
    console.log(`Sever started at http://localhost:${port}`)
});



