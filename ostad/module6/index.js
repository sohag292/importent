const express = require('express')
var bodyParser = require('body-parser')
var multer  = require('multer')
const nodemon = require('nodemon')

var multer = multer()
const app = express()
const port = 3000


// parse application/json
app.use(bodyParser.json())
app.use(multer.array())
app.use(express.static('public'))


// app.get('/', (req, res) => {
//   res.send('This is home page!')
// })

// app.get('/about', (req, res) => {
//     let somearray = [    
//         {"name":"Ram", "email":"ram@gmail.com", "age":23},    
//         {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
//         {"name":"John", "email":"john@gmail.com", "age":33},    
//         {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
//     ] 

//     res.json(somearray).end()
//   })

//   app.get('/one', (req, res) => {
    
//     res.status(420).end('This is status')
//   })

//   app.get('/two', (req, res) => {
    
//     let firstName = req.query.firstName;
//     let lastName =  req.query.lastName;

//     res.status(420).end(firstName +" "+ lastName)
//   })

//   app.get('/three', (req, res) => {
    
//     let firstName = req.header("firstName")
//     let lastName =  req.header("lastName")

//     res.status(420).end(firstName +" "+ lastName)
//   })

//   app.post('/four', (req, res) => {
//     let JSONbody = req.body;

//     // let firstName = JSONbody["name"]
//     // let lastName =  JSONbody["city"]

//     let jsonStringyfy = JSON.stringify(JSONbody)
//     res.status(420).end(jsonStringyfy)
//   })

//   app.post('/five', (req, res) => {
//     let JSONbody = req.body;
//     let bodypars = JSON.stringify(JSONbody)
//     res.status(420).end(bodypars)
//   })

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './upload');
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     },
//   });
  
//   const upload = multer({ storage: storage }).single('myfile');
  
//   app.post('/', function (req, res) {
//     upload(req, res, function (err) {
//       if (err) {
//         res.send('fail');
//       } else {
//         res.send('successful');
//       }
//     });
//   });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})