const express = require('express'); 
const app = express();
const port = 3000;

app.get('/demo', (req, res) => {
  res.send(process.env);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
