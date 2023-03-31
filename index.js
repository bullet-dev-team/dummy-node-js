const express = require('express'); 
const app = express();
const port = 3000;

app.get('/env', (req, res) => {
  res.send(process.env);
});

app.get('/time', (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
