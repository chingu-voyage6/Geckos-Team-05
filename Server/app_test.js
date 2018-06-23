const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

/**
	Lets configure our HTTP GETs/POSTs etc here
*/
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/goodbye', (req, res) => {
  res.send({ express: 'Goodbye From Express' });
});





app.listen(port, () => console.log(`Listening on port ${port}`));