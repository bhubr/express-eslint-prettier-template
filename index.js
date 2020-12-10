const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Express server is up and running!'));

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${port}`);
  }
});
