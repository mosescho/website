const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const path = require('path');

// middlewares:
app.use(express.static(`${__dirname}/../public/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/portfolio', (req, res) => {
  console.log('moses\'s portfolio')
  res.send('mose\'s portfolio');
})
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../public/dist/index.html`));
});

app.listen(PORT, () => {
  console.log('port is listening at ', 3000);
});