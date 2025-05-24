const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const querystring = require('querystring');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <label>Name: <input type="text" name="name" /></label><br>
      <label>Email: <input type="text" name="email" /></label><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', async (req, res) => {
  try {
    const formData = querystring.stringify(req.body);
    const response = await axios.post('http://backend:5000/submit', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    res.send(response.data);
  } catch (err) {
    console.error('Error:', err.message);
    res.send('Error submitting to backend.');
  }
});

app.listen(port, () => {
  console.log(`Frontend running at http://localhost:${port}`);
});
