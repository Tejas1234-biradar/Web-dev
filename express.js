const express = require('express');
const blog = require('./routes/blog')

//if i go on localhost/blog then '/'will handle 

const app = express();
const port = 3000;

app.use('/blog', blog)
app.use(express.static("public"))
//express.static is a middleware
app.get('/', (req, res) => {
  res.send('Hello World!');
}).post('/',(req,res)=>{
  res.send('Hey this is a post request')
}).put('/',(req,res)=>{
  res.send('hey this is a put request')
})

app.get("/index" ,(req, res) => {
  res.sendFile('templates/index.html',{root:__dirname});
  console.log('Hello this is INdex');
  
})
app.get("/api" ,(req, res) => {
  res.json({a:"Tejas",b:"Brother"});
  
})
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Gracefully close server on restart (for nodemon)
process.on('SIGUSR2', () => {
  server.close(() => {
    console.log('Server closed');
    process.exit(0); // Required by nodemon
  });
});
